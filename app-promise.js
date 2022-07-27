// import { crearArchivo } from './helpers/mult';

const { crearArchivo } = 
require('./helpers/multiplicar-promise');

console.clear();

const base = 1;

crearArchivo( base )
    .then ( nombreArchivo => 
        console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));