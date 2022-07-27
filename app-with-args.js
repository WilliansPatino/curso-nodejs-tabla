// Entrada de argumentos por consola (Recomendada)


const yargs = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar-async');
const argv = require('yargs')
                    .option({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        default: false
                    }
                })
                .check( (argv, options) => {
                    if ( isNaN(argv.b) ) {
                        throw 'La base debe ser un número'
                    }
                    return true;
                })
                .argv;

// crear la opcion de listar de tipo boolean


console.clear();

// console.log( process.argv );
console.log( argv);

// console.log('base: yargs', argv.b)

// entrada de argumentos desde la consola
/* const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('='); */



crearArchivo( argv.b, argv.l )
    .then ( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));