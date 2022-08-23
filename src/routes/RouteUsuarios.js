const Router = require('express')
const usuarios = new Router()
const user = require('../app/models/user')
const usercontroller = require('../app/controlers/usercontroller')
const passport = require('passport')
const bcrypt = require('bcryptjs')
async function auth (req, res, next) {
    if (await req.isAuthenticated()) return next()
    res.redirect('/login')
  }
usuarios.get('/usuarios', auth, async (req, res) => {
  let usuarios = await usercontroller.select()
  let usuario = req.user[0]

  res.render('usuarios', { usuarios: usuarios, usuario: usuario.user, userId :usuario.id })
})
usuarios.get('/excluiusuario:id', auth,  async (req, res) => {
  usercontroller.destroy(req.params.id)
  res.redirect('/usuarios')
})
usuarios.post('/gravasenha',   async (req, res) => {
  if (req.body.senha == req.body.confsenha) {
    usercontroller.create(req.body.login, bcrypt.hash(req.body.senha, 10))
    res.send('senha gravada com sucesso')
  }
})
usuarios.get('/cadastrarusuario',  async (req, res) => {
  res.render('cadastrarusuario')
})
usuarios.get('/alterausuario:id',  auth,  async (req, res) => {
  let usuario = await usercontroller.findbyid(req.params.id)

  console.log(usuario[0].user)
  res.render('alterarsenha', { usuario: usuario[0].user, id: req.params.id })
})
usuarios.post('/alterasenha',  async (req, res) => {
  if (req.body.senha == req.body.confsenha) {
    console.log('aqui')
    usercontroller.update(req.body.id, await bcrypt.hash(req.body.senha, 10))
    res.redirect('/usuarios')
  } else {
    res.render({ message: 'As senhas não combinam' })
  }
})
module.exports = usuarios
