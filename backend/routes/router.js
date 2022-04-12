const express = require('express')
const router = express.Router()
const userRout = require('./userRout')
const productRout = require('./productRout')

router.use('/', userRout )
router.use('/', productRout)

module.exports = router