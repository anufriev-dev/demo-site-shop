const mysql2                      = require('mysql2')
const path                        = require('path')
require('dotenv').config({path: path.resolve(__dirname,'.env')})

const connection =  mysql2.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  host: process.env.HOST
})
connection.connect((e) => console.log(e))

module.exports = connection