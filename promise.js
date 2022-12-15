//vamos a leer un archivo de manera asincrona y la vamos a convertir en una promesa
const { readFile } = require("fs");

const getText = (pathFile) => {
  //se va a ejecutar el codigo despues de un cierto tiempo a traves de una funcion
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    }); //llamamos al archivo first y generamos cun callback
  });
};

/*getText("./data/second.txt")
    .then ((result) => console.log(result))  
    .then (() => getText("./data/first.txt"))
    .then (result => console.log(result))  
    .catch(error => console.log(error))
*/




//con async await le estamos diciendo que estamos manejando codigo asincrono
//async await

async function read() {
  //si quiero manejar lo errores coloco un try y luego un catch metiendo todo el codigo dentro:

  try {
//para probar el error vamos a generarlo con throw

    throw new Error ("esto es un error")

    const result = await getText("./data/first.txt");
    //en vez de usar un .then o .catch
    //y si quiero leer el siguiente archivo simplemente hago lo mismo:
    const result2 = await getText("./data/second.txt");
    //en vez de usar un .then o .catch

    console.log(result);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}
read();
