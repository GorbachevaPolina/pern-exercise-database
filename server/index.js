const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

// register and login
app.use("/auth", require("./routes/authentication"));

//dashboard
app.use("/dashboard", require("./routes/dashboard"));

//catalog
app.use("/catalog", require("./routes/catalog"));

app.listen(5000, () => {
    console.log("server has started on port 5000");
})