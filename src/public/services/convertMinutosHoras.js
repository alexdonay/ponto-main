function converteMinutosHoras(minutos) {
    const horas = (Math.trunc(minutos/60)).toString()
    const min = (minutos - (horas*60)).toString()
    return horas.padStart(2,'00') +":"+ min.padStart(2,'00')
}
module.exports = converteMinutosHoras
