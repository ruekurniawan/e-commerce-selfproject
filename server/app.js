const express = require('express')
const app = express()
const cors = require('cors')
const indexRoute = require('./routes/index')
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/e-commerce', { useNewUrlParser: true })

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/', indexRoute)

app.listen(port, () => {
  console.log(`Running in port ${port}`)
})

module.exports = app