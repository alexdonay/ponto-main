export default function soma (hora1, hora2) {
    let shora1 = hora1.split(':')
    let shora2 = hora2.split(':')
    let hhora1 = parseInt(shora1[0])
    let mhora1 = parseInt(shora1[1])
    let hhora2 = parseInt(shora2[0])
    let mhora2 = parseInt(shora2[1])
    let tmin = ((hhora2 + hhora1) * 60 + mhora1 + mhora2) % 60
    let thora = hhora1 + hhora2
    if (thora < 10) {
      thora = '0' + thora
    }
    if (tmin < 10) {
      tmin = '0' + tmin
    }
  
    let result = thora + ':' + tmin
  
    return result
  }