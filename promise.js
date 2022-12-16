//vamos a leer un archivo de manera asincrona y la vamos a convertir en una promesa
const { readFile } = require("fs");
const {promisify} = require('util') //modulo de uilidades de node
// con promisify puedo convertir un callback en una promesa sin escribir todo el código anterior con
//solo escribir lo siguiente:
const readFilePromise = promisify(readFile)



async function read() {
  //si quiero manejar lo errores coloco un try y luego un catch metiendo todo el codigo dentro:

  try {   

    const result = await readFilePromise("./data/first.txt", 'utf-8');
    console.log(result);
    //en vez de usar un .then o .catch
    //y si quiero leer el siguiente archivo simplemente hago lo mismo:
    const result2 = await readFilePromise("./data/second.txt", 'utf-8');
    console.log(result2);
    //en vez de usar un .then o .catch    
    
  } catch (error) {
    console.log(error);
  }
}
read();
