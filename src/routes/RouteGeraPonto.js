const Router = require('express')
const routes = new Router()
const feriadoscontroler = require('../app/controlers/feriadocontroler')
const empregadocontroler = require('../app/controlers/empregadocontroler')
const passport = require('passport')
require('../auth')(passport)
const xls = require('../servicexls')
const bcrypt = require('bcryptjs')

bcrypt.hashSync('nomedomeuis')

async function auth (req, res, next) {
  if (await req.isAuthenticated()) return next()
  res.redirect('/login')
}
routes.post('/livroponto', async (req, res) => {
  let todosdias = dias(req.body.competencia)
  let diaobj = await diasobj(todosdias, req.body.idfunc)

  res.render('livroponto', { dias: diaobj })
})

module.exports = routes
function dias (mesano) {
  let mes = mesano.split('/')[0]
  let ano = mesano.split('/')[1]
  let data = new Date(ano, mes, 0)
  let dias = []
  for (var i = 1; i <= data.getDate(); i++) {
    dias.push(
      i.toString().padStart(2, '00') + '/' + mes.padStart(2, '00') + '/' + ano
    )
  }
  return dias
}
async function diasobj (todosdias, id) {
  var feriados = await feriadoscontroler.selectbydate()
  let dadosponto =[];
  let empregado = await empregadocontroler.selectid(id)


  todosdias.forEach(element => {
    var dateformat =
      element.split('/')[2] +
      '/' +
      element.split('/')[1] +
      '/' +
      element.split('/')[0]
    var dateformatother =
      element.split('/')[2] +
      '-' +
      element.split('/')[1] +
      '-' +
      element.split('/')[0]
    let day = new Date(dateformat)

    let dados = {
      1: {
        justificativa: empregado.segjustificativa,
        diasemana: 'Segunda-Feira',
        entrada: empregado.segentrada,
        entradainter: empregado.segentradainter,
        saidainter: empregado.segsaidainter,
        saida: empregado.segsaida
      },
      2: { justificativa: empregado.terjustificativa,
        diasemana: 'Terça-Feira',
        entrada: empregado.terentrada,
        entradainter: empregado.terentradainter,
        saidainter: empregado.tersaidainter,
        saida: empregado.tersaida
      },
      3: {justificativa:empregado.quajustificativa,
        diasemana: 'Quarta-Feira',
        entrada: empregado.quaentrada,
        entradainter: empregado.quaentradainter,
        saidainter: empregado.quasaidainter,
        saida: empregado.quasaida
      },
      4: {justificativa:empregado.quijustificativa,
        diasemana: 'Quinta-Feira',
        entrada: empregado.quientrada,
        entradainter: empregado.quientradainter,
        saidainter: empregado.quisaidainter,
        saida: empregado.quisaida
      },
      5: {justificativa:empregado.sexjustificativa,
        diasemana: 'Sexta-Feira',
        entrada: empregado.sexentrada,
        entradainter: empregado.sexentradainter,
        saidainter: empregado.sexsaidainter,
        saida: empregado.sexsaida
      },
      6: {justificativa:empregado.sabjustificativa,
        diasemana: 'Sabado',
        entrada: empregado.sabentrada,
        entradainter: empregado.sabentradainter,
        saidainter: empregado.sabsaidainter,
        saida: empregado.sabsaida
      },
      0:{justificativa:empregado.domjustificativa,
        diasemana: 'Domingo',
        entrada: empregado.domentrada,
        entradainter: empregado.domentradainter,
        saidainter: empregado.domsaidainter,
        saida: empregado.domsaida
      },
    }
    
    let eferiado = feriados.find(o => {
      return (
        o.data.toLocaleDateString('en-US', { timeZone: 'UTC' }) ==
        day.toLocaleDateString('en-US', { timeZone: 'UTC' })
      )
    })
    if (eferiado != undefined) {
      dados[day.getDay()].justificativa = 1
   } 
   dados[day.getDay()].dia = dateformatother
    dadosponto.push(dados[day.getDay()])
    
    console.log(dadosponto)
  
    

  })

  return dadosponto
}
