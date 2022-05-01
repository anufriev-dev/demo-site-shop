const express                     = require('express')
const router                      = express.Router()
const orderController              = require('../controller/orderController')
const {check}                     = require('express-validator')
const roleMiddleware              = require('../middleware/roleMiddleware')

router.post('/order', orderController.order )
router.get('/orderget',[roleMiddleware(['ADMIN'])], orderController.orderget )
router.delete('/delete/order/:id',[roleMiddleware(['ADMIN'])], orderController.deleteOrder)

module.exports = router