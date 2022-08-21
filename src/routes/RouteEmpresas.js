const Router = require('express')
const empresas = new Router()
const passport = require('passport')
const Empresacontroler = require('../app/controlers/empresacontroler')
require('../auth')(passport)

async function auth (req, res, next) {
    if (await req.isAuthenticated()) return next()
    res.redirect('/login')
  }

  empresas.post('/gravaempresa', auth, async (req, res) => {
    await Empresacontroler.create(req.body.razao_social, req.body.cnpj)
    
    Empresacontroler.select().then(function (empresas) {
      res.render('empresas', { empresas: empresas })
    })
  })
  empresas.get('/excluiempresa:id', auth, (req, res) => {
      Empresacontroler.destroy(req.params.id)
      Empresacontroler.select().then(function (empresas) {
      const usuario = req.user[0]
      res.render('empresas', { empresas: empresas, usuario: usuario.user, userId: usuario.id   })
    })
  })
  empresas.get('/empresas', auth, async function (req, res) {
    Empresacontroler.select().then(async function (empresas) {
        const usuario = req.user[0]
        res.render('empresas', { empresas: empresas, usuario: usuario.user, userId: usuario.id   })
    })
  })
  module.exports = empresas