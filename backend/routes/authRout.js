const express = require('express')
const router = express.Router()
const authController = require('../controller/authController')
const {check} = require('express-validator')

router.post('/registration',[
  check('password', 'Минимальное кол-во символов от 4 до 10').isLength({min:4,max: 10}),
  check('login', 'Минимальное кол-во символов от 4 до 10').isLength({min:4,max: 10}),
  check('emile',"Невалидный email").isEmail()
], authController.createUser)
router.post('/auth', authController.auth)

module.exports = router