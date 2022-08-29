const Router = require('express')
const routes = new Router()
const empregadocontroler = require('../app/controlers/empregadocontroler')
const pontocontroler = require('../app/controlers/pontocontroler')
const feriadocontroler = require('../app/controlers/feriadocontroler')
const passport = require('passport')
require('../auth')(passport)
const xls = require('../servicexls')
const bcrypt = require('bcryptjs')

bcrypt.hashSync('nomedomeuis')

async function auth (req, res, next) {
  if (await req.isAuthenticated()) return next()
  res.redirect('/login')
}
routes.get('/ponto', auth, async (req, res) => {
  res.render('ponto')
})
routes.get('/pesquisa', auth, async (req, res) => {
  empregadocontroler.select().then(function (empregados) {
    let usuario = req.user[0].user
    let userId = req.user[0].id
    res.render('pesquisaempregado', {
      empregados: empregados,
      usuario: usuario,
      userId: userId
    })
  })
})
routes.get('/incluiponto:id', auth, async (req, res) => {
  try {
    let feriados = await feriadocontroler.select()
    let pontos = await pontocontroler.select(req.params.id)
    let usuario = req.user[0]
    empregadocontroler.selectid(req.params.id).then(function (empregados) {
      res.render('ponto', {
        empregados: empregados,
        feriados: feriados,
        pontos: pontos,
        usuario: usuario.user, userId: usuario.id
      })
    })
  } catch (error) {}
})
routes.post('/gravaponto', auth, async (req, res) => {
  let str = ''

  for (i = 0; i <= req.body.ultimodia - 1; i++) {
    try {
      pontocontroler.create(
        req.body.idfunc,
        req.body.data[i],
        req.body.entrada[i],
        req.body.eintervalo[i],
        req.body.sintervalo[i],
        req.body.saida + [i],
        req.body.hrtrabalhadas[i],
        req.body.hrnormais[i],
        req.body.hr50[i],
        req.body.hr100[i],
        req.body.hrnoturna[i],
        req.body.faltas[i],
        req.body.justifica[i],
        req.body.competencia
      )
    } catch (error) {
      console.log(error)
    }
  }

  res.redirect('/consulta/' + req.body.idfunc + '/' + req.body.competencia)
})
routes.get('/incluiponto:id', auth, async (req, res) => {
  let feriados = await feriadocontroler.select()
  let usuario = req.user[0]
  empregadocontroler.selectid(req.params.id).then(function (empregados) {
    res.render('ponto', {
      empregados: empregados,
      feriados: feriados,
      usuario: usuario.user,
      userId: usuario.id
    })
  })
})
routes.get('/consultaponto:id', auth, async (req, res) => {
  let dados = await empregadocontroler.selectid(req.params.id)

  await pontocontroler.select(req.params.id).then(function (pontos) {
    res.render('consultaponto', { pontos: pontos, dados: dados })
  })
})
routes.get('/consulta/:id/:mes/:ano', auth, async (req, res) => {
  let dados = await empregadocontroler.selectid(req.params.id)

  let competencia = req.params.mes + '/' + req.params.ano
  let hrnormais = 0
  let hrtrabalhadas = 0
  let hr50 = 0
  let hr100 = 0
  let hrfaltas = 0
  let hrnoturnas = 0
  await pontocontroler
    .selectponto1(req.params.id, competencia)
    .then(function (ponto) {
      for (y = 0; y < ponto.length; y++) {
        hrnormais = hrnormais + parsetominutos(ponto[y].hrnormal)
        hrtrabalhadas = hrtrabalhadas + parsetominutos(ponto[y].hrtrabalhada)
        hr50 = hr50 + parsetominutos(ponto[y].hr50)
        hr100 = hr100 + parsetominutos(ponto[y].hr100)
        hrfaltas = hrfaltas + parsetominutos(ponto[y].falta)
        hrnoturnas = hrnoturnas + parsetominutos(ponto[y].hrnoturna)
      }

      res.render('consulta', {
        ponto: ponto,
        dados: dados,
        competencia: competencia,
        hrnormais: parsetohoras(hrnormais),
        hrtrabalhadas: parsetohoras(hrtrabalhadas),
        hr50: parsetohoras(hr50),
        hr100: parsetohoras(hr100),
        hrfaltas: parsetohoras(hrfaltas),
        hrnoturnas: parsetohoras(hrnoturnas)
      })
    })
})
routes.post('/updateponto', auth, async (req, res) => {
  for (let i = 0; i < req.body.id.length; i++) {
    pontocontroler.update(
      req.body.id[i],
      req.body.entrada[i],
      req.body.entradaintervalo[i],
      req.body.saidaintervalo[i],
      req.body.saida[i],
      req.body.hrtrabalhada[i],
      req.body.hrnormal[i],
      req.body.hr50[i],
      req.body.hr100[i],
      req.body.hrnoturna[i],
      req.body.falta[i],
      req.body.justificativa[i]
    )
  }
  res.send('Ponto Atualizado')
})
routes.post('/excluirponto', auth, async (req, res) => {
  for (let i = 0; i < req.body.id.length; i++) {
    pontocontroler.destroy(req.body.id[i])
  }
  res.send('Excluído')
})

module.exports = routes
