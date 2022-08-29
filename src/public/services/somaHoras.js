const converteMinutosHoras = require("./convertMinutosHoras")
const converteHorasMinutos = require("./converHorasMinutos")


function somaHoras(hora1, hora2){
    hora1 = converteHorasMinutos(hora1)
    hora2 = converteHorasMinutos(hora2)
    total = hora1 + hora2
    return converteMinutosHoras(total)
}
module.exports = somaHoras