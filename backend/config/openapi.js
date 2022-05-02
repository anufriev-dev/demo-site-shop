const swaggerJsdoc                = require('swagger-jsdoc')

const option = {
  definition: {
    swagger: "2.0",
    info: {
      title: 'my-shop',
      version: '0.0.1'
    },
  },
  apis:['./app.js','./routes/*.js']
}

const swaggerDocs = swaggerJsdoc(option)

module.exports = swaggerDocs