const fs = require('fs')

module.exports.guardar = (base, data) => {
  fs.writeFile(`tablas/tabla-${base}.txt`, data, 'utf-8', (err) => {
    if (err) console.log(err)
    else console.log(`El archivo tabla-${base}.txt ha sido creado`)
  })
}
