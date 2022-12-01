//con fs (file system) trabajamos con archivos en nodejs
const fs = require("fs");
/*
//como leer un archivo
const first =  fs.readFileSync('./data/first.txt', 'utf-8') //utf-8 me convierte los caracteres del buffer en un string para que se pueda leer el archivo
const second = fs.readFileSync('./data/second.txt')

console.log(second.toString())
console.log(first)

//ahora podemos escribir un archivo
fs.writeFileSync('./data/tercero.txt', 'este es un tercer archivo hello world 3')//dentro del parentesis creamos un archivo + el contenido

//tambien podemos crear una variable con el contenido:

const title = 'este es el cuarto archivo';

fs.writeFileSync('./data/cuarto', title)

*/
//------------------------------------------------------------------------------------

//codigo Asíncrono

fs.readFile("./data/first.txt", (error, data) => {
  //ejecuta la funcion y luego ejecuta la funcion de abajo (console.log)
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});

//ahora si quiero generar un error:
fs.readFile("./dataxx/first.txt", (error, data) => {
  //ejecuta la funcion y luego ejecuta la funcion de abajo (console.log)
  if (error) {
    console.log(error);
  }
  console.log(data);

  //ahora escribiendo el contenido del archivo
  fs.writeFile("./data/newFile.txt", "archivo creado desde fs", (err, data) => {
    console.log(err);
    console.log(data);
  });
});

//el arrow function con los parametros error y data es un callback por que se ejecuta luego de la funcion readFile
//con los parametros (./data/first.txt) que es el texto que tiene que leer
