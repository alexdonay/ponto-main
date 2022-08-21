export  default function parsetominutos (valor) {
    let horas = valor.slice(0, 2) * 60
  
    let minutos = valor.slice(3, 5) * 1
  
    return horas + minutos
  }