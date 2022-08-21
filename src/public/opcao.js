export default function opcao (index, item) {
    var x = document.createElement('OPTION')
    x.setAttribute('value', item)
    x.text = index
    document.getElementById('justifica' + i).appendChild(x)
    item = item + 1
  }