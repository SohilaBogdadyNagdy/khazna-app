const db = require("../db");

//Create a table for users in the database if it doesn't exist at application start
!async function createTable() {
    const tableQuery = `CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        balance DECIMAL(8,2) NOT NULL)`;
   
    await db.query(tableQuery);    
}();

exports.findAll = async function () {
    const results = await db.query("SELECT * FROM users");
    return results[0];
}

exports.findOne = async function (id) {
    const result = await db.query("SELECT * FROM users WHERE id=?", id);
    return result[0];
}

exports.findOneByName = async function (name) {
    const result = await db.query("SELECT * FROM users WHERE name=?", name);
    return result[0];
}

exports.create = async function (name, balance) {
    await db.query("INSERT INTO users(name, balance) VALUES (?, ?)", [name, balance]);
}

exports.update = async function (id, name, balance) {
    await db.query("UPDATE users SET name=?, balance=? WHERE id=?",
        [name, balance, id]);
}