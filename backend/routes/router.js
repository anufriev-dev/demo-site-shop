const express                     = require('express')
const router                      = express.Router()
const userRout                    = require('./userRout')
const productRout                 = require('./productRout')
const authRout                    = require('./authRout')

router.use('/', userRout )
router.use('/', productRout)
router.use('/', authRout)

module.exports = router