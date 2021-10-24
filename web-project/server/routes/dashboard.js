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

router.get("/items", async (req, res) => {
    try {
        const items = await pool.query(
            "SELECT * FROM site_items"
        )

        res.json(items.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server Error");
    }
})

router.get("/fav", authorization, async (req, res) => {
    try {
        const dishes = await pool.query(
            "SELECT * FROM site_items WHERE item_id IN (SELECT item_id FROM favourites WHERE user_id=$1);",
            [req.user]
        ) 

        res.json(dishes.rows)
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server Error");
    }
})

module.exports = router;