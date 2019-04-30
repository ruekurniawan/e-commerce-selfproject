const User = require('../models/user')
const { compare } = require('../helpers/bcrypt')
const { sign } = require('../helpers/jwt')

class UserController {
  static register(req, res) {
    let newUser = {
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role || 'User'
    }
    User
      .create(newUser)
      .then(newRegister => {
        res.status(201).json({
          newRegister, 
          message: `Success user register`
        })
      })
      .catch(err => { 
        res.status(500).json(err)
      })
  }

  static login(req, res) {
    let check = {
      email: req.body.email
    }
    User
      .findOne(check)
      .then(userLogin => {
        if(userLogin) {
          if(compare(req.body.password, userLogin.password)) {
            let payload = {
              id: userLogin._id
            }
            let token = sign(payload)
            res.status(200).json({
              access_token: token,
              role: userLogin.role
            })
          } else {
            res.status(400).json({
              message: `Invalid Password / Email`
            })
          }
        } else {
          res.status(400).json({
            message: `Invalid Password / Email`
          })
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = UserController