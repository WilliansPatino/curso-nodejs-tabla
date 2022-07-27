// esta manera de usar/introducir argumentos aunque resulta
// funcional, no la recomienda el profesor


const { crearArchivo } = require('./helpers/multiplicar-async');

console.clear();

// entrada de argumentos desde la consola
const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');



crearArchivo( base )
    .then ( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));