/*
 *  Endpoints (API): Продукция
 */

const express                     = require('express')
const router                      = express.Router()
const pagination                  = require('../middleware/pagination')
const model                       = require('../model/modelProduct')
const productController           = require('../controller/productController')
const roleMiddleware              = require('../middleware/roleMiddleware')
const {check}                     = require('express-validator')
const {validBody}                 = require('../middleware/castomValidation')


/**
 * @swagger
 * /auth/api/product:
 *   get: 
 *     tags:
 *     - product
 *     summary: получение Постов
 *     responses:
 *      200:
 *        description: ok
 *        schema:
 *          properties:
 *            length:
 *              type: integer
 *            data:
 *             type: array
 *             items:
 *                properties:
 *                  productid:
 *                    type: integer
 *                  img:
 *                    type: string
 *                  title:
 *                    type: string
 *                  price:
 *                    type: integer
 *                  articul:
 *                    type: string          
 */
router.get('/product',pagination(model.getPost),productController.getProductAll )
/**
 * @swagger
 * /auth/api/one/product/{id}:
 *  get:
 *   tags:
 *   - product
 *   summary: найти Пост по id
 *   parameters:
 *    - 
 *      descriptions: id Поста который нужно найти
 *      in: path
 *      name: id
 *      required: true
 *      type: integer
 *   responses:
 *    200:
 *      schema:
 *       type: array
 *       items:
 *        type: object
 *        properties:
 *            productid:
 *              type: integer
 *            img:
 *              type: string
 *            title:
 *              type: string
 *            price:
 *              type: integer
 *            articul:
 *              type: string 
 *            rating:
 *              type: integer
 *    400:
 *      schema:
 *        type: object
 *        properties:
 *          message:
 *            type: string    
 */
router.get('/one/product/:id', productController.getOneProduct)
/**
 * @swagger
 *  /auth/api/product/delete/{id}:
 *  delete:
 *    tags: 
 *    - product
 *    summary: удалить Пост по id
 *    parameters:
 *      - 
 *        description: id для удаления
 *        in: path
 *        name: id
 *        type: integer
 *        required: true
 *      - 
 *        description: "Bearer 'one space' token"
 *        in: header
 *        name: Authorization
 *        type: string
 *        required: true
 *    responses:
 *      200:
 *        schema:
 *          type: object
 *          properties:
 *             message:
 *               type: string
 *             result:
 *              type: object
 *      400:
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string 
 *        
 *          
 */
router.delete('/product/delete/:id',roleMiddleware(['ADMIN']), productController.deleteProduct)
/**
 * @swagger
 * /auth/api/product/create:
 *  post:
 *   tags:
 *   - product
 *   summary: создать Пост
 *   parameters:
 *   - name: title
 *     in: formData
 *     description: Название товара
 *     required: true
 *     type: string
 *   - name: price
 *     in: formData
 *     description: Цена товара
 *     required: true
 *     type: integer
 *   - name: img
 *     in: formData
 *     description: Фотография товара
 *     required: true
 *     type: file
 *   - in: header
 *     description: "Bearer 'one space' token"
 *     name: Authorization
 *     schema:
 *       type: string
 *     required: true
 *   responses:
 *     201:
 *        schema:
 *          properties:
 *            status:
 *              type: string
 *              example: OK
 *            result:
 *              type: object 
 *     403:
 *      schema:
 *        description: "Ошибка токена"
 *        properties:
 *          message: 
 *            type: string 
 *            example: "!token"
 */
router.post('/product/create',[roleMiddleware(['ADMIN']),validBody], productController.createProduct)
/**
 * @swagger
 *  /auth/api/product/update/{id}:
 *   patch:
 *    tags:
 *    - product
 *    summary: обновить Пост по id
 *    parameters:
 *     - 
 *       name: id
 *       description: id Поста для обновления
 *       in: path
 *       type: integer
 *       required: true
 *     - 
 *       name: title
 *       description: Название Поста
 *       in: formData
 *       type: string
 *       required: false
 *     - 
 *       name: price
 *       description: Цена товара
 *       in: formData
 *       type: integer
 *       required: false
 *     - 
 *       name: img
 *       description: Картинка  
 *       in: formData
 *       type: file
 *       required: false
 *     -
 *       description: "Bearer 'one space' token"
 *       in: header
 *       name: Authorization
 *       required: true
 *       type: string
 *    responses:
 *      200:
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 *            result:
 *              type: object
 *            status:
 *              type: string
 *      400:
 *        schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 */
router.patch('/product/update/:id', roleMiddleware(['ADMIN']), productController.updateProductPatch)


module.exports = router