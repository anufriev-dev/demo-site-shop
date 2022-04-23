const modelProduct = require('../model/modelProduct')
const uuid = require('uuid')
const path = require('path')
const {validationResult} = require('express-validator')

class ProductController {
  static async getProductAll (req,res) {
    if(res.paginationResult.data.length !== 0){
      res.send(res.paginationResult)
    }else{
      let result = {}
      result.data = await modelProduct.getPost()
      result.length = result.data.length
      res.send(result)
    }
  }
  static async deleteProduct (req,res) {
    try {
      let id = parseInt(req.params.id)
      let post = await modelProduct.getProductId(id)
      if(!post.length) {
        return res.status(400).json({message: "Пост который вы пытаетесь удалить, не существует"})
      }
      if(typeof id !== "number"){
       return res.status(400).json({message: "Невалидный id"})
      }
      let result = await modelProduct.deletePost(id)
      res.status(200).json({message: `Пост: с id = ${id} был усшпешно удалён`,result})
    } catch (e) {
      console.log(e)
    }
  }
  static async createProduct (req, res) {
    try {
      const errors = validationResult(req)
      if(!errors.isEmpty()) {
        return res.status(400).json({message:'Ошибка добавления продукта', errors })
      }
      console.log(req.files)
      let {title,price} = req.body;
      let {img} = req.files
      let filename = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname,'..','static', filename))

      let result = await modelProduct.createPost(title,price, filename)
      res.status(200).json({message: result})
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = ProductController