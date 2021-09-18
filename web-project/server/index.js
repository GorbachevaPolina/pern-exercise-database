const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//add a user 
app.post("/users", async (req, res) => {
    try {
        const {username, password} = req.body;
        const newUser = await pool.query(
            "INSERT INTO siteusers (username, password) VALUES($1, $2) RETURNING *",
            [username, password]
        );

        res.json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get a user
app.get("/users/:username", async (req, res) => {
    try {
        const {username} = req.params;
        const user = await pool.query(
            "SELECT * FROM siteuser WHERE username = $1",
            [username]
        );

        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//delete a user
app.delete("/users/:username", async (req, res) => {
    try {
        const {username} = req.params;
        const deleteUser = await pool.query(
            "DELETE FROM siteuser WHERE username = $1",
            [username]
        );

        res.json("USER WAS DELETED");
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
})
