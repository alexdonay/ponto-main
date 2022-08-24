c












function parsetohoras (horas) {
  let h = Math.trunc(horas / 60)
  let m = horas - h * 60
  if (h < 10) {
    h = '0' + h
  }
  if (m < 10) {
    m = '0' + m
  }
  return h + ':' + m
}
function parsetominutos (valor) {
  let horas = valor.slice(0, 2) * 60

  let minutos = valor.slice(3, 5) * 1

  return horas + minutos
}

module.exports = routes
