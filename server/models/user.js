const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { hash } = require('../helpers/bcrypt')

userSchema = new Schema ({
  fullname: {
    type: String,
    required: [true, 'Fullname is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email format is invalid'],
    validate: {
      validator(value) {
        return User.findOne({
          email: value,
          _id: { $ne: this._id}
        })
        .then(user => {
          if(user) {
            throw `Email has been used`
          }
        })
        .catch(err => {
          throw err
        })
      }
    }
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  role: {
    type: String,
    default: 'User'
  }
})

userSchema.pre('save', function(next) {
  this.password = hash(this.password)
  next()
})

let User = mongoose.model('User', userSchema)

module.exports = User