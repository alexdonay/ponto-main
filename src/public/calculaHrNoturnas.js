export default function vhrnoturna (entram, saidam) {
    let entrada = parsetominutos(entram)
    let saida = parsetominutos(saidam)
  
    let l1 = parsetominutos('22:00')
    let l2 = parsetominutos('05:00')
  
    if (
      (entrada < saida &&
        entrada <= l1 &&
        entrada >= l2 &&
        saida <= l1 &&
        saida >= l2) ||
      entrada == saida
    ) {
      return 0
    } else {
      console.log('horas noturnas')
      if (saida < entrada) {
        l1 = parsetominutos('10:00')
        l2 = parsetominutos('17:00')
        entrada = entrada - 60 * 12
        saida = saida + 60 * 12
      }
      if (saida > l1 && entrada < l1) {
        entrada = l1
      }
      if (entrada < l2 && saida > l2) {
        saida = l2
      }
  
      console.log('l1 ' + parsetohoras(l1) + ' l2 ' + parsetohoras(l2))
  
      console.log(
        'entrada: ' + parsetohoras(entrada) + ' saida: ' + parsetohoras(saida)
      )
      return saida - entrada
    }
  }
  