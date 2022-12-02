//vamos a crear un servidor basico
//http:protocolo de transferencia de hipertexto
const http = require("http");

//con request hacemos una solicitud al servidor y con response recibimos la respuesta desde el servidor.

const server = http.createServer(function (request, response) {
  //creamos una funcion para hacer la peticion al server y esta tiene dos parametros: requestt y response

  console.log(request.url);

  if (request.url === "/") {
    response.write("welcome to the server"); //colocamos un mensaje
    return response.end(); //el return sale de la funcion
  }

  if (request.url === "/about") {
    response.write("acerca de..."); //colocamos un mensaje
    return response.end(); //el return sale de la funcion
  }

  response.write(`
    <h1>not found</h1>
    <p>esta pagina no se encontro</p>
    <a href="/">volver a la pagina principal</a>
    `); //utilizando esta funcion le puedo colocar un contenido
  response.end(); //le informamos a node que ha acabado el mensaje
});
server.listen(3000); //le colocamos el numero del puerto

console.log("servidor escuchando en el puerto 3000");

//podemos probar abriendo una pantalla en el navegador y colocando http://localhost:3000 y nos va a aparecer hello world
