export default function hrajustada (hr, hrnormal) {
    hr = parsetominutos(hr)
    hrnormal = parsetominutos(hrnormal)
    // if((hr<hrnormal+5)&&(hr>hrnormal-5)){
    //return (parsetohoras(hrnormal))
    //}else{
    return parsetohoras(hr)
    //}
  }