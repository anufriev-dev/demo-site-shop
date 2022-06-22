/*
 *  Маршрутизация
 */

const express                     = require('express')
const router                      = express.Router()
const authRout                    = require('./authRout')
const orderRout                   = require('./orderRout')
const productRout                 = require('./productRout')
const userRout                    = require('./userRout')


router.use('/', authRout)         // Авторизация && Регистрация
router.use('/', orderRout)        // Заказы
router.use('/', productRout)      // Продукция
router.use('/', userRout )        // Пользователи


module.exports = router