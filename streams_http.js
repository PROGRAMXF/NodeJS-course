//ahora vamos a crear la manera de enviar el archivo stream a traves de http

const http = require('http')
const {createReadStream} = require('fs')

const server = http.createServer((request, response)=>{
    const fileStream = createReadStream('./data/bigFile.txt', {
        encoding: 'utf-8'
    })

    fileStream.on('data', (chunk)=>{
        fileStream.pipe(response) //envia los datos a otra funcion
    })

    fileStream.on('error', error => {
        console.log(error)
    })
})
server.listen(3000)
console.log(`server on port ${3000}`)


