//con fs (file system) trabajamos con archivos en nodejs
const fs = require('fs')

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