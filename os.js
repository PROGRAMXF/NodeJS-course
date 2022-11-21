const os = require('os'); //os nos provee informacion que proviene del sistema operativo

console.log(os.userInfo());
console.log(os.uptime());
console.log(os.platform());
console.log(os.totalmem());
console.log(os.freemem());

//tambien se pueden crear tablas con console.table

console.table({
    os: os.platform(),
    version: os.release(),
    totalmemory: os.totalmem()
})

