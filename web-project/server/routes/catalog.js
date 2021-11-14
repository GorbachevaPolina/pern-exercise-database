const router = require("express").Router(); 
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get("/", async (req, res) => {
    try {
        if (req.header('categories').length !== 0) {
            const array = JSON.parse(req.header('categories'));
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
        const categories = JSON.parse(req.header('chosen'));
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

module.exports = router;