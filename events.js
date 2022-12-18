//node me provee un modulo para crear mis propios eventos : EventEmitter
const EventEmitter = require('events')

const customEmitter = new EventEmitter('')

customEmitter.on('response', (data) =>{
    console.log('received')
    console.log(data)

})

customEmitter.emit('response', 'hola fernando')