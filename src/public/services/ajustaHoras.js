const converteHorasMinutos = require('./converHorasMinutos')
const converteMinutosHoras = require("./convertMinutosHoras")
const diferencaHoras = require('./diferencahoras')
const somaHoras = require('./somaHoras')
function ajustaHoras(horaNormal,horaPonto, tolerancia){
    
    const diferenca = converteHorasMinutos(diferencaHoras(horaNormal, horaPonto))
    const toleranciaMinutos = converteHorasMinutos(tolerancia)
    console.log(diferencaHoras(horaNormal, horaPonto))
    if(diferenca<toleranciaMinutos){
        return horaNormal
    }else{
        return horaPonto
    }  
}
module.exports = ajustaHoras