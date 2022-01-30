// setting up connection to mysql2
const mysql = require('mysql2');
require('dotenv').config();
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: process.env.MYSQL_USERNAME,
        // MySQL password
        password: process.env.MYSQL_PASSWORD,
        database: 'employee'
    },
    console.log('Connected to the employee database.')
);

module.exports = db;  