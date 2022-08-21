const Router = require('express')
const exportXLS = new Router()
const passport = require('passport')
require('../auth')(passport)

exportXLS.post('/export', (req, res) => {
    let data = req.body.data
    let entrada = req.body.entrada
    let entradaintervalo = req.body.entradaintervalo
    let saidaintervalo = req.body.saidaintervalo
    let saida = req.body.saida
    let hrtrabalhada = req.body.hrtrabalhada
    let hrnormal = req.body.hrnormal
    let hr50 = req.body.hr50
    let hr100 = req.body.hr100
    let hrnoturna = req.body.hrnoturna
    let falta = req.body.falta
    let justificativa = req.body.justificativa
    let dados = [
      data,
      entrada,
      entradaintervalo,
      saidaintervalo,
      saida,
      hrtrabalhada,
      hrnormal,
      hr50,
      hr100,
      hrnoturna,
      falta,
      justificativa
    ]
  
    xls(dados, dados[0].length)
    res.send('Arquivo Gerado com Sucesso ' + dados[0].length)
  })
  module.exports =  exportXLS