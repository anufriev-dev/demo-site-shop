const express                     = require('express')
const cors                        = require('cors')
const router                      = require('./routes/router')
const fileUpload                  = require('express-fileupload')
const path                        = require('path')
const logger                      = require('morgan')
const swaggerUI                   = require('swagger-ui-express')
const swaggerDocs                 = require('./config/openapi')

require('dotenv').config({path: path.resolve(__dirname,'config','.env')})

const app = express()
const PORT = process.env.PORT


app.use(logger('dev'))
app.use('/swagger',swaggerUI.serve,swaggerUI.setup(swaggerDocs))

app.use(express.json())

app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use(cors({origin:process.env.CORS}))

app.use('/auth/api', router);

app.listen(PORT,() => console.log(`Server has been started: { port: ${PORT} }`))