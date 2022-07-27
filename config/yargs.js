const colors = require('colors');

const argv = require('yargs')
        .option({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: colors.brightCyan('Es la base de la tabla de multiplicar')
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: colors.brightCyan('Muestra la tabla en consola')
        },
        'h': {
            alias: 'Hasta',
            type: 'number',
            default: 10,
            describe: colors.brightCyan('Hasta que número desea la tabla')
        }
    })
    .check( (argv, options) => {
        if ( isNaN(argv.b) ) {
            throw colors.brightRed('La base debe ser un número')
        }
        return true;
    })
    .argv;

module.exports = argv;

// codificacion utilizada en el curso
 
/*     .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: colors.brightCyan('Es la base de la tabla de multiplicar')
    })
    .option('l', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: colors.brightCyan('Es la base de la tabla de multiplicar')
    })
    .option('h', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: colors.brightCyan('Es la base de la tabla de multiplicar')
    })
    .check( (argv, options) => {
        if ( isNaN(argv.b) ) {
            throw colors.brightRed('La base debe ser un número')
        }
        return true;
    })
    .argv;
    
 */