function parsetohoras (horas) {
    let hora = (Math.trunc(horas / 60)).toString()
    let minuto = Math.trunc(horas - hora * 60).toString()
    
    return hora.padStart(2,"00") + ':' + minuto.padStart(2,"00")
  }

 module.exports = parsetohoras