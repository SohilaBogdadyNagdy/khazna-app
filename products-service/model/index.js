const db = require("../db");

!async function createTable() {
    const tableQuery = `CREATE TABLE IF NOT EXISTS products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        brand VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        price DECIMAL(8,2) NOT NULL,
        state VARCHAR(255),
        )`;
   
    await db.query(tableQuery);    
}();

exports.findAll = async function () {
    const results = await db.query("SELECT * FROM products");
    return results[0];
}
 
exports.findByUserBalance = async function (balance) {
    const result = await db.query("SELECT * FROM products WHERE price=<?", balance);
    return result[0];
}

exports.findOne = async function (id) {
    const result = await db.query("SELECT * FROM products WHERE id=?", id);
    return result[0];
}

exports.findOneByName = async function (name) {
    const result = await db.query("SELECT * FROM products WHERE name=?", name);
    return result[0];
}

exports.create = async function (name, brand, category, price) {
    await db.query("INSERT INTO products(name, brand, category, price) VALUES (?, ?, ?, ?)", [name, brand, category, price]);
}

exports.updateState = async function (id, state) {
    await db.query("UPDATE products SET state=? WHERE id=?",
        [state, id]);
}