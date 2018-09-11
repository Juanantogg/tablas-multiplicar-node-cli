module.exports.multiplicar = (base, limite = 10) => {
  let data = ''

  for (let i = 1; i <= limite; i++) {
    data += `${base} X ${i} = ${base * i}\n`
  }

  return data
}
