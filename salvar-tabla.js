// import { writeFile } from 'fs';


const fs = require('fs');
// import { writeFile }  from 'fs';



console.clear();

const base = 10;
let salida = '';


console.log(`=== Tabla del ${ base } ===`);


for (let n = 1; n <= 10; n++) {
      salida += `${n} x ${base} = ${n * base}\n `;
}

console.log(salida);

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
  if (err)  throw err;

  console.log(`tabla-${base}.txt creado`);

});

