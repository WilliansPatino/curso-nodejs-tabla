// Entrada de argumentos por consola (Recomendada)


const yargs = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar-async');
const argv = require('./config/yargs');
const colors = require('colors');
 

console.clear();

// console.log( process.argv );
// console.log( argv);

// console.log('base: yargs', argv.b)

// entrada de argumentos desde la consola
/* const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('='); */



crearArchivo( argv.b, argv.l )
    .then ( nombreArchivo => console.log(colors.green(nombreArchivo), 'creado'.rainbow))
    .catch(err => console.log(err));