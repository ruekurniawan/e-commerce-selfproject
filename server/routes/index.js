const router = require('express').Router()
const userController = require('../controllers/userController')
const productRoutes = require('../routes/product')

router.post('/register', userController.register)
router.post('/login', userController.login)

router.use('/product', productRoutes)

module.exports = router