const mysql = require('mysql');

const db_location = process.env.DB_LOCATION;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_name  = process.env.DB_NAME;
const pool = mysql.createPool({
    host: db_location,
    port: '3306',
    user: db_user,
    password: db_password,
    database: db_name,
});

module.exports = pool;
