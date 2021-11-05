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

module.exports = router;