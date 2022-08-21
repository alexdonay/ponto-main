const Router = require('express')
const teste = new Router()

teste.get('/teste', (req, res) => {
  res.render('index')
} )
module.exports = teste