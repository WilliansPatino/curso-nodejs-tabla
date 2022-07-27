const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

  try {
    
    let salida = '';
    let consola = '';
    
    for (let n = 1; n <= hasta; n++) {
      
      salida += ` ${ n } x  ${base} = ${n * base}\n `;
      consola += ` ${ 'n'.random } ${'x'.green}  ${base} ${'='.green} ${n * base}\n `;
    }
    
    if ( listar ) {
      console.log('=== Tabla del '.green,colors.yellow(base),'hasta el',hasta,' ==='.green);
      console.log(consola);
    }
  
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
  
    return (`tabla-${base}.txt`);

  }
  catch (err) {
      throw err;

  }

}


// export default { crearArchivo }
module.exports = { crearArchivo }