const bcrypt = require('bcrypt')

module.exports = {
  hash(value) {
    return bcrypt.hashSync(value, 8)
  },
  compare(value, hashValue) {
    return bcrypt.compareSync(value, hashValue)
  }
}