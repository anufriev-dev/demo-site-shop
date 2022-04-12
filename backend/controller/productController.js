const modelProduct = require('../model/modelProduct')

class ProductController {
  static async getProductAll (req,res) {
    let data = await modelProduct.getPost()
    res.send(data)
  }
}

module.exports = ProductController