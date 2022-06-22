/*
 *  Главные зависимости сервера:
 */

const express                     = require('express')
const cors                        = require('cors')
const router                      = require('./routes/router')
const fileUpload                  = require('express-fileupload')
const path                        = require('path')
const logger                      = require('morgan')
const swaggerUI                   = require('swagger-ui-express')
const swaggerDocs                 = require('./config/openapi')


  // Переменные окружения .env
require('dotenv').config({path: path.resolve(__dirname,'config','.env')})

/*
 *  1) Cоздаём приложение express
 */

const app = module.exports = express()

  // получаем порт по умолчанию из переменных окружения,
  // если его нет, то берем тот который есть
const PORT = process.env.PORT || 4000


/*
 *  2) Добавляем промежуточное ПО 
 */

  // модуль ('morgan'): консольный логгер
app.use(logger('dev'))

  // endpoint swagger документации
app.use('/swagger',swaggerUI.serve,swaggerUI.setup(swaggerDocs))

  // модуль: Парсинг данных в json по умолчанию
app.use(express.json())

  // создаем директорию статичных файлов
app.use(express.static(path.resolve(__dirname,'static')))

  // модуль ('express-fileupload'): Работа с файлами 
app.use(fileUpload({}))

  // модуль ('cors'): Политика CORS для клиента (режим совместимости)
app.use(cors({origin:process.env.CORS}))

  // Главный Роут от которого исходят все остальные
app.use('/auth/api', router);


/*
 *  3) Запуск сервера на указанном порту
 */ 

app.listen(PORT,() => console.log(`Server has been started: { port: ${PORT} }`))