const express = require('express')
const router = express.Router()
const pagination = require('../middleware/pagination')
const model = require('../model/modelProduct')
const productController = require('../controller/productController')
const roleMiddleware = require('../middleware/roleMiddleware')
const {check} = require('express-validator')

 
router.get('/product/:page?/:limit?',pagination(model.getPost),productController.getProductAll )
router.delete('/product/delete/:id',roleMiddleware(['ADMIN']), productController.deleteProduct)
// router.post('/product/update/:id', productController.)
router.post('/product/create',roleMiddleware(['ADMIN']), productController.createProduct)


module.exports = router