//vamos a leer un archivo de manera asincrona y la vamos a convertir en una promesa
const { readFile } = require("fs");

const getText = (pathFile) => {
//se va a ejecutar el codigo despues de un cierto tiempo a traves de una funcion
return new Promise(function(resolve, reject){
    readFile(pathFile, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
    }); //llamamos al archivo first y generamos cun callback
    
})
}

getText("./data/second.txt")
    .then ((result) => console.log(result))  
    .then (() => getText("./data/first.txt"))
    .then (result => console.log(result))  
    .catch(error => console.log(error))



 