const router = require("express").Router(); 
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get("/", async (req, res) => {
    try {
        if (req.header('categories').length !== 0) {
            const array = JSON.parse(req.header('categories'));
            array.forEach(item => item.category_name = decodeURI(item.category_name))
            let categories = [];
            for (let i = 0; i < array.length; ++i) {
                categories.push(array[i].category_id)
            }

            const items = await pool.query(
                "SELECT distinct exercise_id, content, name, description FROM exercises JOIN category_exercise USING(exercise_id) WHERE category_exercise.category_id = ANY($1::int[]) ORDER BY exercise_id",
                [categories]
            )
    
            res.json(items.rows);
        } else {
            throw new Error('Empty categories array')
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server Error");
    }
})

router.get('/chosen', async (req, res) => {
    try {
        var categories = JSON.parse(req.header('chosen'));
        categories = decodeURI(categories).split(',');
        const items = await pool.query(
            "SELECT exercise_id, content, name, description FROM exercises JOIN category_exercise USING(exercise_id) JOIN categories USING(category_id) WHERE categories.category_name = ANY($1::varchar[]) GROUP BY exercises.exercise_id HAVING count(exercise_id) = $2 ORDER BY exercises.exercise_id",
            [categories, categories.length]
        )

        res.json(items.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server Error");
    }
})

router.get("/categories", async (req, res) => {
    try {
        const categories = await pool.query(
            "SELECT * FROM categories"
        )

        res.json(categories.rows)
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server Error");
    }
})

router.get("/category", async (req, res) => {
    try {
        const exercise_id = req.header('exercise_id');

        const categories = await pool.query(
            "SELECT category_name FROM categories JOIN category_exercise USING(category_id) WHERE category_exercise.exercise_id = $1",
            [exercise_id]
        ) 

        res.json(categories.rows)
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server Error");
    }
})

router.post("/add", authorization, async (req, res) => { 
    try {
        let {content, name, description, type, muscle, equipment} = req.body;
        type = type.charAt(0).toUpperCase() + type.toLowerCase().slice(1);
        muscle = muscle.charAt(0).toUpperCase() + muscle.toLowerCase().slice(1);
        equipment = equipment.charAt(0).toUpperCase() + equipment.toLowerCase().slice(1);

        //adding new exercise
        const newExercise = await pool.query(
            "INSERT INTO exercises (content, name, description) VALUES ($1, $2, $3) RETURNING exercise_id",
            [content, name, description]
        )

        //getting categories
        const checkCategories = await pool.query(
            "SELECT * FROM categories WHERE category_name = $1 OR category_name = $2 OR category_name = $3",
            [type, muscle, equipment]
        )

        //adding new categories
        if (checkCategories.rows.length !== 3) {
            let arr = [];
            for (let i = 0; i < checkCategories.rows.length; ++i) {
                arr.push(checkCategories.rows[i].category_group);
            }
            let difference = ['type', 'muscle group', 'equipment'].filter(x => !arr.includes(x));

            for (let i = 0; i < difference.length; ++i) {
                let val = 0;
                if (difference[i] === 'type') {
                    val = type;
                } else if (difference[i] === 'muscle group') {
                    val = muscle;
                } else {
                    val = equipment;
                }
                const addCategory = await pool.query(
                    "INSERT INTO categories (category_name, category_group) VALUES ($1, $2) RETURNING *",
                    [val, difference[i]]
                )
            }
        }
        
        const connect = await pool.query(
            "INSERT INTO category_exercise (exercise_id, category_id) SELECT * from (select exercises.exercise_id from exercises where exercises.exercise_id = $1) as q1, (select categories.category_id from categories where categories.category_name = $2 or categories.category_name = $3 or categories.category_name = $4) as q2;",
            [newExercise.rows[0].exercise_id, type, muscle, equipment]
        )

        res.json("Exercise added")
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server Error");
    }
})

module.exports = router;