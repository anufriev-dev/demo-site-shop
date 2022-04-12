const mysql2 = require('mysql2')
require('dotenv').config({path: __dirname + "/config/.env"})

const connection =  mysql2.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  host: process.env.HOST
})
connection.connect((e) => console.log(e))

module.exports = connection