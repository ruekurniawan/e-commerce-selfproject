require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = {
  sign(value) {
    return jwt.sign(value, process.env.JWT_SECRET)
  },
  verify(token) {
    return jwt.verify(token, process.env.JWT_SECRET)
  }
}