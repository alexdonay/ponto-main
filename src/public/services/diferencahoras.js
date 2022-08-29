const horasMinutos = require('./converHorasMinutos')
const minutosHoras = require('./convertMinutosHoras')
function diferencaHoras(entrada, saida){
    var entradaMinutos = horasMinutos(entrada)
    var saidaMinutos = horasMinutos(saida)

    if(entradaMinutos>saidaMinutos){
        entradaMinutos += (12 * (-60))
        saidaMinutos += (12 * 60)
    }
    
    return minutosHoras(saidaMinutos - entradaMinutos)
}
module.exports  = diferencaHoras

