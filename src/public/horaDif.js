export default function horadif (hora1, hora2) {
    let hr1minutos = parsetominutos(hora1)
    let hr2minutos = parsetominutos(hora2)
    let difmin = hr1minutos - hr2minutos
  
    let dif
    if (difmin < 0) {
      dif = parsetohoras(difmin + 60 * 24)
    } else {
      dif = parsetohoras(difmin)
    }
    return dif
  }