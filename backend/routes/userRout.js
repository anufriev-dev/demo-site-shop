/*
 *  Endpoints (API): Пользователи
 */

const express                     = require('express')
const router                      = express.Router()
const userController              = require('../controller/userController')


/**
 * @swagger
 * /auth/api/users:
 *  get:
 *   tags:
 *   - user
 *   summary: получить всех Пользователей
 *   responses:
 *    200:
 *      description: Пост в массиве
 *      schema:
 *        type: array
 *        items:
 *         properties:
 *           id:
 *             type: string
 *           login:
 *             type: string
 *           pass:
 *             type: string
 *           roleid:
 *             type: string
 *           emile: 
 *             type: string
 *    
 */
router.get('/users', userController.getAllUsers)

module.exports = router