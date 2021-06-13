//event Emitter
//const events = require('events')
//console.log(events)
// função do estilo classe
const { EventEmitter } = require('events')
// novo objeto do tipo EventEmitter
const evento = new EventEmitter()


evento.emit("say my name, say my name")