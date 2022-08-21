const Router = require('express')
const login = new Router()
const passport = require('passport')
require('../auth')(passport)

login.get('/login', async (req, res) => {
  if (req.query.fail) {
    res.render('login', {
      message: 'Senha ou Usuário inválido',
      layout: 'empty'
    })
  } else {
    res.render('login', { message: '', layout: 'empty' })
  }
})

login.post(
  '/login',
    passport.authenticate('local', {
    successRedirect: 'index',
    failureRedirect: 'login?fail=true'
  }),()=>{
    console.log('teste')
  }
)
module.exports = login
