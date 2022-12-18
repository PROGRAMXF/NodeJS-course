const { readFile } = require("fs/promises");

async function read() {
  try {
    const result = await readFile("./data/first.txt", "utf-8");
    console.log(result);
    const result2 = await readFile("./data/second.txt", "utf-8");
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}
read();
/*Ya sabemos como crear un módulo mínimo, como consumirlo a dicho módulo
 y también como consumir módulos que vienen por defecto en Node.js.
Ahora veremos dos módulos que vienen implementados en Node.js por defecto y nos permiten acceder
 al sistema de archivos para poder leer sus contenidos y crear otros archivos o carpetas.
Tenemos que poner mucho cuidado en entender el concepto de programación asincrónica que propone 
la plataforma de Node.js
La programación asincrónica busca no detener la ejecución del programa en forma completa 
por actividades que requieren mucho tiempo (una analogía es imaginar que nuestro entorno Node.js es 
  un "mozo de restaurante" que va a una mesa y toma el pedido y lo envía a la cocina, la eleboración del 
  pedido toma su tiempo pero el mozo no se queda congelado hasta que la cocina le avisa que el pedido está 
  preparado sino que sigue tomando pedidos en otras mesas)
El módulo de administración de archivos "fs" y "fs/promises" implementa la programación asincrónica para procesar
 su creación, lectura, modificación, borrado etc. empleando el concepto de devolución de llamadas (funciones callbacks)
*/
