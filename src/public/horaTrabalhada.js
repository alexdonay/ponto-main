function htrabalhada (hora1, hora2, hora3, hora4) {
    let manha = horadif(hora1, hora2)
  
    let tarde = horadif(hora3, hora4)
  
    let result = soma(manha, tarde)
  
    return result
  }