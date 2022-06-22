/*
 *  Логика: Продукция
 * 
 *  1) Получить сущность всей продукции
 *  2) Получить продукт по id
 *  3) Удалить продукт по id
 *  4) Создать продукт
 *  5) Обновить продукт 
 */

const modelProduct                = require('../model/modelProduct')
const uuid                        = require('uuid')
const path                        = require('path')
const fs                          = require('fs')


class ProductController {
  // 1) Получить все продукты 
  // 2) Вернуть объект который содержит
  //   1.1 Объект с этими продуктами
  //   1.2 Количество этих продуктов
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
  // Получить один продукт с базы, по id
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
      res.status(200).json(oneProduct)
      
    } catch (e) {
      return res.status(400).json(e)
    }
  }
  // Удалить один продукт с базы, по id
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
  // Создать один продукт
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
  // Обновить один продукт по любому кол-ву полей
  static async updateProductPatch (req,res) {
    try {
      let img;
      if(req.files) {
        img = req.files.img
      }
      let id = req.params.id

      let {title ,price,rating,descpost } = req.body

      if (title)  await modelProduct.updatePostaPatch('title',title,id)
      if (price)  await modelProduct.updatePostaPatch('price',price,id)
      if (rating)  await modelProduct.updatePostaPatch('rating',rating,id)
      if (descpost)  await modelProduct.updatePostaPatch('descpost',descpost,id)

      if (img) {
        const postId  = await modelProduct.findPost(id)
        const prevImg = postId[0].img
        if(fs.existsSync(path.resolve(__dirname , '..', 'static', prevImg))) {
          fs.unlinkSync(path.resolve(__dirname , '..', 'static', prevImg))
        }

        let filename = uuid.v4() + '.jpg';
        img.mv(path.resolve(__dirname,'..','static', filename))
        await modelProduct.updatePostaPatch('img',filename,id)
      }

      let result = []
      res.status(200).json({message: 'Обновлено!',result,status: 'OK'})
    } catch(e) {
      console.log(e)
    }
  }
}

module.exports = ProductController