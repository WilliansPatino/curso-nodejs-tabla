// import { writeFile } from 'fs';


const fs = require('fs');


console.clear();

const base = 8;
let salida = '';


console.log(`=== Tabla del ${ base } ===`);


for (let n = 1; n <= 10; n++) {
      salida += `${n} x ${base} = ${n * base}\n `;
}

console.log(salida);

fs.writeFileSync(`tabla-${base}.txt`, salida) 

  console.log(`tabla-${base}.txt creado`);


