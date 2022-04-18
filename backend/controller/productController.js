const modelProduct = require('../model/modelProduct')

class ProductController {
  static async getProductAll (req,res) {
    if(res.paginationResult.data.length !== 0){
      res.send(res.paginationResult)
    }else{
      let data = await modelProduct.getPost()
      res.send(data)
    }
  }
}

module.exports = ProductController