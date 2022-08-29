const Router = require('express')
const index = new Router()
const passport = require('passport')
require('../auth')(passport)

async function auth (req, res, next) {
  if (await req.isAuthenticated()) return next()
  res.redirect('/login')
}

index.get('/index', auth, (req, res) => {
  let usuario = req.user[0].user
  let userId = req.user[0].id
  res.render('index', {usuario:usuario, userId:userId})
})
module.exports = index
