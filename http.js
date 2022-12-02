//vamos a crear un servidor basico
//http:protocolo de transferencia de hipertexto
const http = require('http');

//con request hacemos una solicitud al servidor y con response recibimos la respuesta desde el servidor.

http.createServer(function(request, response){ //creamos una funcion para hacer la peticion al server y esta tiene dos parametros: requestt y response
    response.write('hello world otra vez')//utilizando esta funcion le puedo colocar un contenido
    response.end();//le informamos a node que ha acabado el mensaje

}).listen(3000) //le colocamos el numero del puerto

console.log('servidor escuchando en el puerto 3000');

//podemos probar abriendo una pantalla en el navegador y colocando http://localhost:3000 y nos va a aparecer hello world