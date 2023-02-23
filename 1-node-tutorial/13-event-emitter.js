// on - listen for an event first
//emit - emit an event second
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (namee, id)=>{
    console.log(`data received user ${namee} with id: ${id}`);
})
customEmitter.on('response',()=>{
    console.log(`some other logic here`)
})
customEmitter.emit('response','john',34)