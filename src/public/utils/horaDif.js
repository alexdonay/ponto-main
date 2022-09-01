const parsetominutos = require("./parseMinutos")
const parseHoras = require('./parseHoras')
function horadif (hora1, hora2) {
    let hr1minutos = parsetominutos(hora1)
    let hr2minutos = parsetominutos(hora2)
    let difmin =  hr2minutos - hr1minutos
    if(difmin>0){
      dif  = difmin
    } else{
      dif =  (hr2minutos + 24*60) - (hr1minutos )
    }
    

    return parseHoras(dif)
  }

  console.log(horadif("13:00","14:00"))