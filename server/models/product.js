const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  nameProduct: {
    type: String,
    required: [true, 'Name Product is required']
  },
  priceProduct: {
    type: Number,
    minimum: 0,
    validate: {
      validator(value) {
        return value > 0  
      },
      message: `Price need to be greater than 0`
    }
  },
  stockProduct: {
    type: Number,
    minimum: 0,
    validate: {
      validator(value) {
        return value > 0
      },
      message: `Stock need to bee greater than 0`
    }
  },
  imageProduct: String
})

let Product = mongoose.model('Product', productSchema)

module.exports = Product