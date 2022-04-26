const express = require('express')
const router = express.Router()
const pagination = require('../middleware/pagination')
const model = require('../model/modelProduct')
const productController = require('../controller/productController')
const roleMiddleware = require('../middleware/roleMiddleware')
const {check} = require('express-validator')
const {validBody} = require('../middleware/castomValidation')

 
router.get('/product/:page?/:limit?',pagination(model.getPost),productController.getProductAll )

router.get('/one/product/:id',roleMiddleware(['ADMIN']), productController.getOneProduct)

router.delete('/product/delete/:id',roleMiddleware(['ADMIN']), productController.deleteProduct)

router.post('/product/create',[roleMiddleware(['ADMIN']),validBody], productController.createProduct)

router.put('/product/update/:id',roleMiddleware(['ADMIN']), productController.updateProduct)


module.exports = router