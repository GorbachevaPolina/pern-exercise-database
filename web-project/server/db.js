const Pool = require("pg").Pool;

const pool = new Pool({
    user: "project",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "webproject"
});

module.exports = pool;