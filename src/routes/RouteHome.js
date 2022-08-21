const Router = require('express')
const home = new Router()
const passport = require('passport')
require('../auth')(passport)

async function auth (req, res, next) {
  if (await req.isAuthenticated()) return next()
  res.redirect('/login')
}

home.get('/', auth, (req, res) => {
  let usuario = req.user[0].user
  res.render('index', {usuario:usuario})
})
module.exports = home
