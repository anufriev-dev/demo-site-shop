const express                     = require('express')
const router                      = express.Router()
const authRout                    = require('./authRout')
const orderController             = require('./orderRout')
const productRout                 = require('./productRout')
const userRout                    = require('./userRout')


router.use('/', authRout)
router.use('/', orderController)
router.use('/', productRout)
router.use('/', userRout )



module.exports = router