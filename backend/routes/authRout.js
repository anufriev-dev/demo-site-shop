/*
 *  Endpoints (API): Авторизация && Регистрация
 */

const express                     = require('express')
const router                      = express.Router()
const authController              = require('../controller/authController')
const {check}                     = require('express-validator')


/**
 * @swagger
 * /auth/api/registration:
 *  post:
 *    tags:
 *    - auth
 *    summary: "регистрация User'a"
 *    parameters:
 *     -  
 *       description: Логи для регистрации
 *       in: body
 *       schema:
 *        type: object
 *        properties:
 *          login:
 *            type: string
 *          emile:
 *            type: string
 *          password:
 *            type: string
 *    responses:
 *      200:
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *              example: Успешно!
 *            data:
 *              type: object
 *      400:
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *            errors:
 *              type: object
 *              properties:
 *                errors:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      value:
 *                        type: string
 *                      msg:
 *                        type: string
 *                      param:
 *                        type: string
 *                      location:
 *                        type: string
 */
router.post('/registration',[
  check('password', 'Password: Минимальное кол-во символов от 4 до 10').isLength({min:4,max: 10}),
  check('login', 'Login: Минимальное кол-во символов от 4 до 10').isLength({min:4,max: 10}),
  check('emile',"Email: Невалидный email").isEmail()
],
  authController.createUser)
/**
 * @swagger
 * /auth/api/auth:
 *  post:
 *   tags:
 *   - auth
 *   summary: авторизация
 *   parameters:
 *   -
 *    description: body
 *    in: body
 *    required: true
 *    schema:
 *      type: object
 *      properties: 
 *        password:
 *          type: string
 *        login:
 *          type: string  
 *   responses:
 *    200:
 *      schema:
 *        type: object
 *        properties:
 *          token: 
 *            type: string
 *          role:
 *            type: string
 *    403:
 *      schema:
 *        type: string
 *        example: Error
 */
router.post('/auth', authController.auth)

module.exports = router