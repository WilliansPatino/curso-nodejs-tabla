const fs = require('fs');

const crearArchivo = (base = 5) => {

  return new Promise((resolve, reject) => {

    console.log('=== Tabla del ',base,' ===');
    
    let salida = '';

    for (let n = 1; n <= 10; n++) {

      salida += `${n} x ${base} = ${n * base}\n `;
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    resolve(`tabla-${base}.txt`);

  });


}

// export default { crearArchivo }
module.exports = { crearArchivo };