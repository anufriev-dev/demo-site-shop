const express = require('express')
const router = express.Router()
const pagination = require('../middleware/pagination')
const model = require('../model/modelProduct')
const productController = require('../controller/productController')

 
router.get('/product/:page?/:limit?',pagination(model.getPost),productController.getProductAll )


module.exports = router