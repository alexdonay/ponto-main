
const Router = require('express')
const routes = new Router()
const empregadocontroler = require('../app/controlers/empregadocontroler')
const passport = require('passport')
const Empresacontroler = require('../app/controlers/empresacontroler')
require('../auth')(passport)

async function auth (req, res, next) {
    if (await req.isAuthenticated()) return next()
    res.redirect('/login')
  }
routes.post('/gravaempregado', auth, async (req, res) => {
    await empregadocontroler.create(
      req.body.nome,
      req.body.cnpj,
      req.body.cpf,
      req.body.ctps,
      req.body.idempresa,
      req.body.segjustificativa,
      req.body.segentrada,
      req.body.segentradainter,
      req.body.segsaidainter,
      req.body.segsaida,
      req.body.terjustificativa,
      req.body.terentrada,
      req.body.terentradainter,
      req.body.tersaidainter,
      req.body.tersaida,
      req.body.quajustificativa,
      req.body.quaentrada,
      req.body.quaentradainter,
      req.body.quasaidainter,
      req.body.quasaida,
      req.body.quijustificativa,
      req.body.quientrada,
      req.body.quientradainter,
      req.body.quisaidainter,
      req.body.quisaida,
      req.body.sexjustificativa,
      req.body.sexentrada,
      req.body.sexentradainter,
      req.body.sexsaidainter,
      req.body.sexsaida,
      req.body.sabjustificativa,
      req.body.sabentrada,
      req.body.sabentradainter,
      req.body.sabsaidainter,
      req.body.sabsaida,
      req.body.domjustificativa,
      req.body.domentrada,
      req.body.domentradainter,
      req.body.domsaidainter,
      req.body.domsaida
    )
  
    empregadocontroler.select().then(function (empregados) {
      res.render('empregados', { empregados: empregados })
    })
  
    res.redirect('/empregados')
  })

  routes.get('/empregados', auth, async function (req, res) {
    const usuario = req.user[0]
    Empresacontroler.select().then(async function (empresas) {
      res.render('empregados', { empresas: empresas,usuario: usuario.user, userId: usuario.id })
    })
  })
  routes.post('/empregados', auth, function (req, res) {
    res.render('empregados')
  })
  routes.get('/excluifuncionario:id', auth, (req, res) => {
    empregadocontroler.destroy(req.params.id)
    const usuario = req.user[0]
    empregadocontroler.select().then(function (empregados) {
      res.render('empregados', { empregados: empregados,usuario: usuario.user, userId: usuario.id })
    })
  })
  routes.get('/consultafuncionario:id', auth, async (req, res) => {
    const usuario = req.user[0]
    await empregadocontroler.selectid(req.params.id).then(function (empregados) {
      res.render('consultaempregado', { empregados: empregados ,usuario: usuario.user, userId: usuario.id })
    })
  })
  routes.post('/atualizafunc', auth, async (req, res) => {
    await empregadocontroler
      .update(
        req.body.id,
        req.body.nome,
        req.body.cpf,
        req.body.ctps,
        req.body.idempresa,
        req.body.segjustificativa,
        req.body.segentrada,
        req.body.segentradainter,
        req.body.segsaidainter,
        req.body.segsaida,
        req.body.terjustificativa,
        req.body.terentrada,
        req.body.terentradainter,
        req.body.tersaidainter,
        req.body.tersaida,
        req.body.quajustificativa,
        req.body.quaentrada,
        req.body.quaentradainter,
        req.body.quasaidainter,
        req.body.quasaida,
        req.body.quijustificativa,
        req.body.quientrada,
        req.body.quientradainter,
        req.body.quisaidainter,
        req.body.quisaida,
        req.body.sexjustificativa,
        req.body.sexentrada,
        req.body.sexentradainter,
        req.body.sexsaidainter,
        req.body.sexsaida,
        req.body.sabjustificativa,
        req.body.sabentrada,
        req.body.sabentradainter,
        req.body.sabsaidainter,
        req.body.sabsaida,
        req.body.domjustificativa,
        req.body.domentrada,
        req.body.domentradainter,
        req.body.domsaidainter,
        req.body.domsaida
      )
      .then(function (empregados) {
        res.render('consultaempregado', { empregados: empregados })
      })
  })

  module.exports = routes