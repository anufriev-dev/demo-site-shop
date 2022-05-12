const express                     = require('express')
const router                      = express.Router()
const authRout                    = require('./authRout')
const orderRout                   = require('./orderRout')
const productRout                 = require('./productRout')
const userRout                    = require('./userRout')


router.use('/', authRout)
router.use('/', orderRout)
router.use('/', productRout)
router.use('/', userRout )



module.exports = router