const modelProduct                = require('../model/modelProduct')
const uuid                        = require('uuid')
const path                        = require('path')
const fs                          = require('fs')
const {validationResult}          = require('express-validator')


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
  static async getOneProduct (req, res) {
    try {
      let id = req.params.id
      if(!id) {
       return  new Error('error')
      }

      let oneProduct = await modelProduct.findPost(id)
      if(oneProduct.length === 0) {
        return res.status(400).json({message: 'Поста не существует'})
      }
      console.log(oneProduct)
      res.status(200).json(oneProduct)
      
    } catch (e) {
      return res.status(400).json(e)
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
      const postId = await modelProduct.findPost(id)
      const name = postId[0].img
      const result = await modelProduct.deletePost(id)

      if(fs.existsSync(path.resolve(__dirname , '..', 'static', name))) {
        fs.unlinkSync(path.resolve(__dirname , '..', 'static', name))
      }

      res.status(200).json({message: `Пост: с id = ${id} был усшпешно удалён`,result})
    } catch (e) {
      console.log(e)
    }
  }
  static async createProduct (req, res) {
    try {
      let {title,price,rating,descpost} = req.body;
      let {img} = req.files

      let filename = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname,'..','static', filename))
      
      let articul = uuid.v1();
      console.log("heare" + articul);
      let result = await modelProduct.createPost(title,price,rating,descpost , filename,articul)
      res.status(200).json({status: 'OK',result})
    } catch (e) {
      console.log(e)
    }
  }
  static async updateProduct (req, res) {
    try {
      if(!req.files){
        return res.status(400).json({message: 'Файл не найден'})
      }
      let {img} = req.files 
      let {title,price} = req.body;
      let id = req.params.id
      const postId  = await modelProduct.findPost(id)
      
      if(postId.length <= 0){
        return res.status(400).json({message: 'Такого поста несуществует'})
      }

      const prevImg = postId[0].img

      let filename = uuid.v4() + '.jpg';

      let result;
      if(prevImg == img) {      
        result = await modelProduct.updatePost(title,price,prevImg,id)
      }else{
        img.mv(path.resolve(__dirname,'..','static', filename))
        if(fs.existsSync(path.resolve(__dirname , '..', 'static', prevImg))) {
          fs.unlinkSync(path.resolve(__dirname , '..', 'static', prevImg))
        }
        result = await modelProduct.updatePost(title,price,filename,id)
      }
      res.status(200).json({message: 'Обновлено!',result,status: 'OK'})

    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = ProductController