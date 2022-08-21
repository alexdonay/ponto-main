const mask = {
  periodo (value) {
    const first = ['2', '3', '4', '5', '6', '7', '8', '9']
    if (value.length == 1) {
      first.forEach(substituir)
      function substituir (item) {
        value.replace(item, '')
        value = value.replace(item, '')
        sdig = value
      }
    }
    if (value.length == 2) {
      const second = ['3', '4', '5', '6', '7', '8', '9']
      if (sdig == 1) {
        second.forEach(substituir)
        function substituir (item) {
          value = value.replace(item, ' ')
        }
      }
    }
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2')
  },
  numero (value) {
    return value.replace(/\D/g, '')
  },
  cnpj (value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
  },
  cpf (value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1-$2')
  },
  text () {}
}
document.querySelectorAll('input').forEach($input => {
  const field = $input.dataset.js
  $input.addEventListener(
    'input',
    e => {
      e.target.value = mask[field](e.target.value)
    },
    false
  )
})
export default mask
