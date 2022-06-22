/*
 *  Схема документации Swagger (Open API)
 */

const path = require('path')
const swaggerJsdoc                = require('swagger-jsdoc')
require('dotenv').config({path: path.resolve(__dirname,'.env') })


const option = {
  definition: {
    swagger: "2.0",
    info: {
      title: 'my-shop',
      version: '1.0.0',
    },
    host: `${process.env.HOST}:${process.env.PORT}`
  },
  apis:['./app.js','./routes/*.js']
}

const swaggerDocs = swaggerJsdoc(option)

module.exports = swaggerDocs