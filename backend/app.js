const express = require('express')
const cors = require('cors')
require('dotenv').config({path: __dirname + "/config/.env"})
const router = require('./routes/router')

const app = express()
const PORT = process.env.PORT

app.use(express.json());
app.use(cors({origin:"http://localhost:3000"}))
app.use('/auth/api', router);

app.listen(PORT,() => console.log(`Сервер запущен на порту ${PORT}`))