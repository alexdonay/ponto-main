
const Router = require('express')
const feriados = new Router()
const passport = require('passport')
require('../auth')(passport)
const feriadocontroler = require('../app/controlers/feriadocontroler')
async function auth (req, res, next) {
    if (await req.isAuthenticated()) return next()
    res.redirect('/login')
  }
feriados.get('/selectferiado', auth, (req, res) => {
    let feriados = feriadocontroler.select()
    let numero = feriadocontroler.count()
  })
  feriados.post('/gravafer', auth, async (req, res) => {
    await feriadocontroler.create(req.body.data, req.body.descricao)
    feriadocontroler.select().then(function (feriados) {
      res.render('feriados', { feriados: feriados })
    })
    res.redirect('/feriados')
  })
  feriados.get('/excluiferiado:id', auth, (req, res) => {
    feriadocontroler.destroy(req.params.id)
    feriadocontroler.select().then(function (feriados) {
      res.render('feriados', { feriados: feriados })
    })
    res.redirect('/feriados')
  })
  feriados.get('/feriados', auth, function (req, res) {
    feriadocontroler.select().then(function (feriados) {
      let usuario = req.user[0]
      res.render('feriados', { feriados: feriados, usuario:usuario.user, userId :usuario.id })
    })
  })
  feriados.post('/feriados', auth, function (req, res) {
    res.redirect('/feriados')
  })
  module.exports = feriados