function geraponto () {
    let pontos = pontocontroler.selectByid(document.getElementById("periodo"))
    if (pontos.indexOf(document.getElementById('periodo').value) != -1) {
      window.alert('Este mês já foi calculado')
    } else {
      document.getElementById('geraponto2').setAttribute('hidden', 'true')
      if (document.getElementById('tbponto')) {
      } else {
        let feriados = feriadosarray()
        var x = document.createElement('INPUT')
        x.setAttribute('type', 'button')
        x.setAttribute('value', 'Calcula')
        x.setAttribute('id', 'btncalcula')
        x.setAttribute('class', 'submitponto')
        document.body.appendChild(x)
        x.setAttribute('onclick', 'calcula(2)')
        let mesano = document.getElementById('periodo').value
        let smesano = mesano.split('/')
        let mes = smesano[0]
        let ano = smesano[1]
        ultimodia = new Date(ano, mes, 0).getDate()
        document.getElementById('ultimodia').value = ultimodia
        var dhead = document.createElement('DIV')
        dhead.setAttribute('id', 'dhead')
        document.getElementById('divponto').appendChild(dhead)
        let tabela = document.createElement('table')
        tabela.setAttribute('id', 'tbponto')
        document.getElementById('divponto').appendChild(tabela)
        linha('lhead')
        celula('a', 'lhead')
        celula('b', 'lhead')
        celula('c', 'lhead')
        celula('d', 'lhead')
        celula('e', 'lhead')
        celula('f', 'lhead')
        celula('g', 'lhead')
        celula('h', 'lhead')
        celula('i', 'lhead')
        celula('j', 'lhead')
        celula('k', 'lhead')
        celula('m', 'lhead')
        var x = document.createElement('INPUT')
        x.setAttribute('type', 'text')
        x.setAttribute('value', 'Data')
        x.setAttribute('disabled', 'true')
        document.getElementById('a').appendChild(x)
        var x = document.createElement('INPUT')
        x.setAttribute('type', 'text')
        x.setAttribute('value', 'Entrada')
        x.setAttribute('disabled', true)
        document.getElementById('b').appendChild(x)
        var x = document.createElement('INPUT')
        x.setAttribute('type', 'text')
        x.setAttribute('value', 'Saida')
        x.setAttribute('size', '6')
        document.getElementById('c').appendChild(x)
        var x = document.createElement('INPUT')
        x.setAttribute('type', 'text')
        x.setAttribute('value', 'Entrada')
        x.setAttribute('size', '6')
        document.getElementById('d').appendChild(x)
        var x = document.createElement('INPUT')
        x.setAttribute('type', 'text')
        x.setAttribute('value', 'Saida')
        x.setAttribute('disabled', true)
        document.getElementById('e').appendChild(x)
        var x = document.createElement('INPUT')
        x.setAttribute('type', 'text')
        x.setAttribute('disabled', true)
        x.setAttribute('value', 'Trabalhadas')
        document.getElementById('f').appendChild(x)
        var x = document.createElement('INPUT')
        x.setAttribute('type', 'text')
        x.setAttribute('disabled', true)
        x.setAttribute('value', 'Normais')
        document.getElementById('g').appendChild(x)
        var x = document.createElement('INPUT')
        x.setAttribute('type', 'text')
        x.setAttribute('disabled', true)
        x.setAttribute('value', '50%')
        document.getElementById('h').appendChild(x)
        var x = document.createElement('INPUT')
        x.setAttribute('type', 'text')
        x.setAttribute('disabled', true)
        x.setAttribute('value', '100%')
        document.getElementById('i').appendChild(x)
        var x = document.createElement('INPUT')
        x.setAttribute('type', 'text')
        x.setAttribute('disabled', true)
        x.setAttribute('value', 'Noturnas')
        document.getElementById('j').appendChild(x)
        var x = document.createElement('INPUT')
        x.setAttribute('type', 'text')
        x.setAttribute('disabled', true)
        x.setAttribute('value', 'Faltas')
        document.getElementById('k').appendChild(x)
        var x = document.createElement('INPUT')
        x.setAttribute('type', 'text')
        x.setAttribute('disabled', true)
        x.setAttribute('value', 'Justificativa')
        document.getElementById('m').appendChild(x)
        for (i = 1; i <= ultimodia; i++) {
          linha('l' + i)
          celula('a' + i, 'l' + i)
          celula('b' + i, 'l' + i)
          celula('c' + i, 'l' + i)
          celula('d' + i, 'l' + i)
          celula('e' + i, 'l' + i)
          celula('f' + i, 'l' + i)
          celula('g' + i, 'l' + i)
          celula('h' + i, 'l' + i)
          celula('i' + i, 'l' + i)
          celula('j' + i, 'l' + i)
          celula('k' + i, 'l' + i)
          celula('m' + i, 'l' + i)
          var x = document.createElement('INPUT')
          x.setAttribute('type', 'date')
          x.setAttribute('Id', 'dia' + i)
          x.setAttribute('name', 'data')
          x.setAttribute('tabindex', '-1')
          x.setAttribute('class', 'inputdate')
  
          if (i <= 9) {
            x.setAttribute('value', ano + '-' + mes + '-0' + i)
          } else {
            x.setAttribute('value', ano + '-' + mes + '-' + i)
          }
          document.getElementById('a' + i).appendChild(x)
          var x = document.createElement('INPUT')
          x.setAttribute('type', 'time')
          x.setAttribute('Id', 'entrada' + i)
          x.setAttribute('name', 'entrada')
          document.getElementById('b' + i).appendChild(x)
          var x = document.createElement('INPUT')
          x.setAttribute('type', 'time')
          x.setAttribute('Id', 'eintervalo' + i)
          x.setAttribute('name', 'eintervalo')
          document.getElementById('c' + i).appendChild(x)
          var x = document.createElement('INPUT')
          x.setAttribute('type', 'time')
          x.setAttribute('Id', 'sintervalo' + i)
          x.setAttribute('name', 'sintervalo')
          document.getElementById('d' + i).appendChild(x)
          var x = document.createElement('INPUT')
          x.setAttribute('type', 'time')
          x.setAttribute('Id', 'saida' + i)
          x.setAttribute('name', 'saida')
          document.getElementById('e' + i).appendChild(x)
          var x = document.createElement('INPUT')
          x.setAttribute('tabindex', '-1')
          x.setAttribute('type', 'time')
          x.setAttribute('Id', 'hrtrabalhadas' + i)
          x.setAttribute('name', 'hrtrabalhadas')
          document.getElementById('f' + i).appendChild(x)
          var x = document.createElement('INPUT')
          x.setAttribute('type', 'time')
          x.setAttribute('Id', 'hrnormais' + i)
          x.setAttribute('name', 'hrnormais')
          x.setAttribute('tabindex', '-1')
          document.getElementById('g' + i).appendChild(x)
          var x = document.createElement('INPUT')
          x.setAttribute('type', 'time')
          x.setAttribute('Id', 'hr50' + i)
          x.setAttribute('name', 'hr50')
          x.setAttribute('tabindex', '-1')
          document.getElementById('h' + i).appendChild(x)
          var x = document.createElement('INPUT')
          x.setAttribute('type', 'time')
          x.setAttribute('Id', 'h100' + i)
          x.setAttribute('name', 'hr100')
          x.setAttribute('tabindex', '-1')
          document.getElementById('i' + i).appendChild(x)
          var x = document.createElement('INPUT')
          x.setAttribute('type', 'time')
          x.setAttribute('Id', 'hrnoturna' + i)
          x.setAttribute('name', 'hrnoturna')
          x.setAttribute('tabindex', '-1')
          document.getElementById('j' + i).appendChild(x)
          var x = document.createElement('INPUT')
          x.setAttribute('type', 'time')
          x.setAttribute('Id', 'Faltas' + i)
          x.setAttribute('name', 'faltas')
          x.setAttribute('tabindex', '-1')
          document.getElementById('k' + i).appendChild(x)
          var x = document.createElement('SELECT')
          x.setAttribute('Id', 'justifica' + i)
          x.setAttribute('name', 'justifica')
          document.getElementById('m' + i).appendChild(x)
          var opcoes = ['Normal', 'Folga', 'Justificada']
          opcoes.forEach(opcao)
          let Data = new Date(document.getElementById('dia' + i).value)
          document.getElementById(
            'hrnormais' + i
          ).value = document.getElementById('horasnormais:' + Data.getDay()).value
          document.getElementById(
            'justifica' + i
          ).value = document.getElementById(Data.getDay() + 'justificativa').value
          if (feriados.indexOf(document.getElementById('dia' + i).value) != -1) {
            document.getElementById('justifica' + i).value = 1
          }
        }
      }
    }
  }
 
