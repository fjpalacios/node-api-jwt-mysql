'use strict';

const mysql = require('mysql2');
const dbOptions = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE
};
const db = mysql.createConnection(dbOptions);

db.connect((err) => {
  if (err) {
    console.log(`Database connection error: ${err.starck}`);
  } else {
    console.log('Connection to database established');
  }
});

module.exports = db;
