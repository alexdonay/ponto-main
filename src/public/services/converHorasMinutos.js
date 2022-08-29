function horasToMinutos(horas){
    const totalHoras = parseInt(horas.split(":")[0])
    const minutos = parseInt(horas.split(":")[1])
    const horasConvertidas = (totalHoras * 60) + minutos 
    return horasConvertidas
}
module.exports =  horasToMinutos






