const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000


//middleware
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    //server static content
    app.use(express.static(path.join(__dirname, "client/build")))
}

//ROUTES

// register and login
app.use("/auth", require("./routes/authentication"));

//dashboard
app.use("/dashboard", require("./routes/dashboard"));

//catalog
app.use("/catalog", require("./routes/catalog"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"))
})

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
})
