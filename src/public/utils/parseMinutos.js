function parsetominutos (valor) {
    let horas = parseInt(valor.split(":")[0])*60
    let minutos = parseInt(valor.split(":")[1])
    return horas + minutos
  }
  module.exports = parsetominutos