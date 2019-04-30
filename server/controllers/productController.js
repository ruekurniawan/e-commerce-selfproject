const Product = require('../models/product')

class ProductController {
  static create(req, res) {
    let newProduct = {
      nameProduct: req.body.nameProduct,
      priceProduct: req.body.priceProduct,
      stockProduct: req.body.stockProduct,
      imageProduct: req.body.stockProduct
    }
    Product
      .create(newProduct)
      .then()
  }
}

module.exports = ProductController