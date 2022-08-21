export default function calcula (dias) {
  document.getElementById('resultado2').hidden = false
  document.getElementById('gravaponto').hidden = false
  let data = new Date(document.getElementById('dia1').value)
  var month = data.getMonth(data) + 1
  var year = data.getFullYear(data)
  let utdia = new Date(year, month, 0).getDate()
  for (i = 1; i <= ultimodia; i++) {
    let eintervalo = document.getElementById('eintervalo' + i).value
    let entrada = document.getElementById('entrada' + i).value
    let sintervalo = document.getElementById('sintervalo' + i).value
    let saida = document.getElementById('saida' + i).value
    let hrtrabalhadas = htrabalhada(eintervalo, entrada, saida, sintervalo)
    document.getElementById('hrtrabalhadas' + i).value = hrtrabalhadas
    let diasem = new Date(document.getElementById('dia' + i).value)
    let codi = diasem.getDay()
    let eintervalon = document.getElementById('Entradaintervalo:' + codi).value
    let entradan = document.getElementById('Entrada:' + codi).value
    let sintervalon = document.getElementById('saidaintervalo:' + codi).value
    let saidan = document.getElementById('saida:' + codi).value

    let entradas = hrajustada(entrada, entradan)
    let entinterval = hrajustada(eintervalo, eintervalon)
    let sainterval = hrajustada(sintervalo, sintervalon)
    let saidas = hrajustada(saida, saidan)

    let hrtrabalhaajustada = htrabalhada(
      entinterval,
      entradas,
      saidas,
      sainterval
    )
    let hrnormais = document.getElementById('hrnormais' + i).value

    let hrtrabalhadamin = parsetominutos(hrtrabalhaajustada)
    let hrnormaismin = parsetominutos(hrnormais)
    let horasextrasmin = hrtrabalhadamin - hrnormaismin

    if (horasextrasmin < 0) {
      document.getElementById('Faltas' + i).value = parsetohoras(
        horasextrasmin * -1
      )
      document.getElementById('hr50' + i).value = '00:00'
      document.getElementById('h100' + i).value = '00:00'
    } else {
      document.getElementById('Faltas' + i).value = '00:00'
      if (horasextrasmin > 120) {
        document.getElementById('hr50' + i).value = '02:00'
        document.getElementById('h100' + i).value = parsetohoras(
          horasextrasmin - 120
        )
      } else {
        document.getElementById('hr50' + i).value = parsetohoras(horasextrasmin)
        document.getElementById('h100' + i).value = '00:00'
      }
    }
    if (document.getElementById('justifica' + i).value == 1) {
      document.getElementById('Faltas' + i).value = '00:00'
      document.getElementById('hr50' + i).value = '00:00'
      document.getElementById('h100' + i).value = parsetohoras(horasextrasmin)
    }
    if (document.getElementById('justifica' + i).value == 2) {
      document.getElementById('Faltas' + i).value = '00:00'
      document.getElementById('hr50' + i).value = '00:00'
      document.getElementById('h100' + i).value = '00:00'
    }
    let horasnoturnasmanha
    let horasnoturnastarde
    let horasnoturastotais

    horasnoturnasmanha = vhrnoturna(entradas, entinterval)

    horasnoturnastarde = vhrnoturna(sainterval, saidas)

    horasnoturastotais = ((horasnoturnasmanha + horasnoturnastarde) / 52.5) * 60

    document.getElementById('hrnoturna' + i).value = parsetohoras(
      horasnoturastotais
    )
  }
  let totaln = 0
  let totalt = 0
  let total50 = 0
  let total100 = 0
  let totalf = 0
  let totalnot = 0
  for (i = 1; i <= ultimodia; i++) {
    totaln += parsetominutos(document.getElementById('hrnormais' + i).value)
    document.getElementById('hn').value = parsetohoras(totaln)

    totalt += parsetominutos(document.getElementById('hrtrabalhadas' + i).value)
    document.getElementById('ht').value = parsetohoras(totalt)

    total50 += parsetominutos(document.getElementById('hr50' + i).value)
    document.getElementById('h50').value = parsetohoras(total50)

    total100 += parsetominutos(document.getElementById('h100' + i).value)
    document.getElementById('h100').value = parsetohoras(total100)

    totalnot += parsetominutos(document.getElementById('Faltas' + i).value)
    document.getElementById('hf').value = parsetohoras(totalnot)

    totalf += parsetominutos(document.getElementById('hrnoturna' + i).value)
    document.getElementById('hnot').value = parsetohoras(totalf)
  }
}