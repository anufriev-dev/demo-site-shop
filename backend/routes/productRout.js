const express = require('express')
const router = express.Router()
const pagination = require('../middleware/pagination')
const model = require('../model/modelProduct')
const productController = require('../controller/productController')
const roleMiddleware = require('../middleware/roleMiddleware')

 
router.get('/product/:page?/:limit?',[pagination(model.getPost), roleMiddleware(['USER'])],productController.getProductAll )


module.exports = router