//path nos permite trabajar con carpetas y archivos y poder conocer sus direcciones para saber donde estan 
const path = require('path');

const filePath =  path.join('/public', 'dist', './style', 'main.css') //permite unir rutas*/

console.log(path.basename(filePath))//me permite extraer una url

console.log(path.dirname(filePath))//me da la ruta de los directorios

console.log(path.parse(filePath))//me da la misma informacion de la ruta pero en formato de objeto

console.log(path.resolve('dist'))//es una alternativa a join, si yo le paso una ruta la va completar a partir de la ruta inicial del sistema operativo

