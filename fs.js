//con fs (file system) trabajamos con archivos en nodejs
const fs = require('fs')

//como leer un archivo
const first =  fs.readFileSync('./data/first.txt', 'utf-8') //utf-8 me convierte los caracteres del buffer en un string para que se pueda leer el archivo
const second = fs.readFileSync('./data/second.txt')

console.log(second.toString())
console.log(first)