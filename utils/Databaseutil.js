const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'airbnb_user',
  password: 'password123',
  database: 'airbnb_db'
})

module.exports = pool.promise();