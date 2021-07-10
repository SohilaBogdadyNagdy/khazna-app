
var express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 81;
const db_location = process.env.DB_LOCATION;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_name  = process.env.DB_NAME;
 
 
app.use(express.json());
app.use(cors());
 