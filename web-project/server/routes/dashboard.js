const router = require("express").Router(); 
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get("/", authorization, async (req, res) => {
    try {
        const user = await pool.query(
            "SELECT username FROM users WHERE user_id = $1",
            [req.user]
        )

        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server Error");
    }
})

router.post("/fav", authorization, async (req, res) => {
    try {
        const {exercise_id} = req.body;

        const exercise = await pool.query(
            "SELECT * FROM favourites WHERE user_id = $1 AND exercise_id = $2",
            [req.user, exercise_id]
        );

        if (exercise.rows.length !== 0) {
            return res.status(401).json("Exercise already added to favourites");
        };

        const newExercise = await pool.query(
            "INSERT INTO favourites (user_id, exercise_id) VALUES ($1, $2) RETURNING *",
            [req.user, exercise_id]
        )

        res.json(newExercise.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error"); 
    }
})

router.get("/fav", authorization, async (req, res) => {
    try {
        const dishes = await pool.query(
            "SELECT * FROM exercises WHERE exercise_id IN (SELECT exercise_id FROM favourites WHERE user_id=$1);",
            [req.user]
        ) 

        res.json(dishes.rows)
    } catch (err) { 
        console.error(err.message);
        res.status(500).json("Server Error");
    }
})

router.delete("/fav/:id", authorization, async(req, res) => {
    try {
        const {id} = req.params;
        const deleteExercise = await pool.query(
            "DELETE FROM favourites WHERE exercise_id = $1 AND user_id = $2",
            [id, req.user]
        );

        res.json('Exercise was deleted');
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server Error");
    }
})

module.exports = router;