const express                     = require('express')
const router                      = express.Router()
const userRout                    = require('./userRout')
const productRout                 = require('./productRout')
const authRout                    = require('./authRout')
const orderController             = require('./orderRout')

router.use('/', userRout )
router.use('/', productRout)
router.use('/', authRout)
router.use('/', orderController)

module.exports = router