const yargs = require('yargs')

const { multiplicar } = require('./multiplicar/multiplicar')
const { guardar } = require('./multiplicar/guardar')

yargs
  .command('listar', 'Imprime en consola las tablas de multiplicar', {
    base: {
      alias: 'b',
      demand: true
    },
    limite: {
      alias: 'l',
      default: 10
    }
  })
  .command('crear', 'Imprime en consola las tablas de multiplicar', {
    base: {
      alias: 'b',
      demand: true
    },
    limite: {
      alias: 'l',
      default: 10
    }
  })
  .help()

const guardarTablas = async (base, limite) => {
  if (!Number(base)) {
    console.log(`Èl dato ingresado "${base}" no es, o no se puede convertir a un numero`)
    return
  }

  let data = await multiplicar(base, limite)
  guardar(base, data)
}

switch (yargs.argv._[0]) {
  case 'listar':
    console.log(multiplicar(yargs.argv.base, yargs.argv.limite))
    break
  case 'crear':
    guardarTablas(yargs.argv.base, yargs.argv.limite)
    break
  default:
    console.log(`El comando ${yargs.argv._[0]} no esta definido`)
    break
}
