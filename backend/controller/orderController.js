const modeleOrder                 = require('../model/modeleOrder')
const {validationResult}          = require('express-validator')

class OrderController {
  static async order (req,res) {
    try {
      const errors = validationResult(req)
      console.log(errors)
      if(!errors.isEmpty()) {
        return res.status(400).json({message:'Заказ не валидный', errors })
      }
      let {articul,email,textArea} = req.body
      let result = await modeleOrder.orderBy(articul,email,textArea)
      
      res.status(200).json({message:'Заказ сделан!!!', result})
    }catch (e) {
      console.log(e)
    }
  }
  static async orderget (req,res) {
    try {
      let result = await modeleOrder.orderGetAll()
      res.status(200).json({message: 'Ok', result})
    } catch (e) {
      console.log(e)
    }
  }
  static async deleteOrder (req,res) {
    try {
      let {id} = req.params
      if(!id) {
        return res.status(400).json('Id НЕ найдено')
      }
      let result = await modeleOrder.deleteOrderByOne(id)
      res.status(200).json({message: 'Заказ был онулирован!', result})
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = OrderController