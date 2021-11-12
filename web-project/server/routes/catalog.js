const router = require("express").Router(); 
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get("/", async (req, res) => {
    try {
        const items = await pool.query(
            "SELECT * FROM exercises"
        )

        res.json(items.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server Error");
    }
})

router.get("/categories", async (req, res) => {
    try {
        const group = req.header('group')

        const categories = await pool.query(
            "SELECT distinct category_name FROM categories WHERE category_group = $1",
            [group]
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