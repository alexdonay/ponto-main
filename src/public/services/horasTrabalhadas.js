const horadif = require('./diferencahoras')
const somaHoras = require('./somaHoras')
function horasTrabalhadas(entrada, entradaIntervalo, saidaIntervalo, saida){
    const horasManha = horadif(entrada, entradaIntervalo)
    const horasTarde = horadif(saidaIntervalo, saida)
    return somaHoras(horasManha, horasTarde)

}
