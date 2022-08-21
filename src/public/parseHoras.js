function parsetohoras (horas) {
    let h = Math.trunc(horas / 60)
    let m = Math.trunc(horas - h * 60)
    if (h < 10) {
      h = '0' + h
    }
    if (m < 10) {
      m = '0' + m
    }
    return h + ':' + m
  }