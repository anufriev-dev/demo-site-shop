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
 *   parameters:
 *   -
 *    name: email
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
  check('textArea',"Минимальное кол-во символов от 4").isLength({min: 4})
],
  orderController.order )

router.get('/orderget',[roleMiddleware(['ADMIN'])], orderController.orderget )

router.delete('/delete/order/:id',[roleMiddleware(['ADMIN'])], orderController.deleteOrder)

module.exports = router