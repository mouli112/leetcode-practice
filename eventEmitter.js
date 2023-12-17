const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Event listener
myEmitter.on('customEvent', (data) => {
  console.log('Event received:', data);
});

// Emitting an event
myEmitter.emit('customEvent', 'Hello, Event Emitter!');
