const express                     = require('express')
const router                      = express.Router()
const orderController             = require('../controller/orderController')
const {check}                     = require('express-validator')
const roleMiddleware              = require('../middleware/roleMiddleware')

/**
 * @swagger
 * /auth/api/order:
 *  post:
 *   tags:
 *   - order
 *   summary: создать Заказ
 *   parameters:
 *   -
 *    name: body
 *    description: Email для создания заказа
 *    in: body
 *    type: string
 *    required: trud
 *    schema:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        textArea:
 *          type: string
 *        articul:
 *          type: string
 *
 *   responses:
 *    200:
 *     schema:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *        result:
 *          type: object
 *    400:
 *      schema:
 *        type: object
 *        properties:
 *          message:
 *            type: string
 *          errors:
 *            type: object
 *            properties:
 *              errors:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    value:
 *                      type: string
 *                    mes:
 *                      type: string
 *                    param:
 *                      type: string
 *                    location:
 *                      type: string
 *      
 */
router.post('/order',[
  check('articul',"Минимальное кол-во символов от 4").isLength({min:4}),
  check('email', "Email не валидный").isEmail(),
  // check('textArea',"Минимальное кол-во символов от 4").isLength({min: 4})
],
  orderController.order )
/**
 * @swagger
 *  /auth/api/orderget:
 *  get:
 *   tags:
 *   - order
 *   summary: получить массив Заказов
 *   parameters:
 *   - 
 *     name: Authorization
 *     description: "Bearer 'one space' token"
 *     in: header
 *     type: string
 *     required: true
 *   responses:
 *    200: 
 *      schema:
 *        type: object
 *        properties:
 *          message:
 *            type: string
 *            example: OK
 *          result:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                allArticul:
 *                  type: string
 *                email:
 *                  type: string
 *                text:
 *                  type: string
 *                idorder:
 *                   type: integer
 *    403:
 *     schema:
 *      type: object
 *      properties:
 *        message:
 *          type: string             
 */
router.get('/orderget',[roleMiddleware(['ADMIN'])], orderController.orderget )
/**
 * @swagger
 *  /auth/api/delete/order/{id}:
 *   delete:
 *    tags:
 *    - order
 *    summary: удалить Заказ по id
 *    parameters:
 *    - 
 *      name: id 
 *      description: id для удаления
 *      in: path
 *      type: integer
 *      required: true
 *    - 
 *      name: Authorization
 *      description: "Bearer 'one space' token"
 *      in: header
 *      required: true
 *      type: string
 *      
 *    responses:
 *      200:
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *            status:
 *              type: string
 *              example: Ok
 *      400:
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *            status:
 *              type: string
 *              example: Bad  
 */
router.delete('/delete/order/:id',[roleMiddleware(['ADMIN'])], orderController.deleteOrder)

module.exports = router