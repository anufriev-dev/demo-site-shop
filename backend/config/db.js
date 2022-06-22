/*
 *  Схема подключения к базе данных MySql
 */

const mysql2                      = require('mysql2')
const path                        = require('path')
require('dotenv').config({path: path.resolve(__dirname,'.env')})


const connection =  mysql2.createConnection({
  user: process.env.DB_USER,              // USER
  password: process.env.DB_PASSWORD,      // PASSWORD
  database: process.env.DB_NAME,          // DATABASE
  port: process.env.DB_PORT,              // PORT
  host: process.env.HOST                  // HOST
})

module.exports = connection