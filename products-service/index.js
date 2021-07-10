
var express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const host = '0.0.0.0';
const port = 80;
const db_location = process.env.DB_LOCATION;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_name  = process.env.DB_NAME;
const auth_service_url = process.env.AUTH_URL;
 
 
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
