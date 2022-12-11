
//vamos a crear un ejemplo mas grafico:

const http = require("http");

 //ahora creo un servidor:
const server = http.createServer((request, response) => {

    if(request.url === "/"){
        response.write("Bienvenido al server");
        return response.end();
    }

    if(request.url === "/about"){

        //ahora vamos a simular una tarea con un bucle for que bloquea la ejecucion de todo el codigo de node
        //para evitar esto utilizamos codigo asincrono
        for(let i = 0; i < 100000; i++){

            //nos muestra un mensaje aleatorio:
            console.log(Math.random() * i);

        }
        
        return response.end("acerca de la pagina");
    }

    response.end("not found");

})
server.listen(3000);
console.log("server sobre perto 3000")

/*console.log("first");
setTimeout(() => {

    console.log("second"); //queda como una tarea pendiente
}, 3000)


console.log("third");
*/