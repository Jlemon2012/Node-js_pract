// event-driven programming
const EventEmitter = require('events');

const customEmmiter = new EventEmitter();

// on - listen for an event
// emit - emit an event

customEmmiter.on('response', (name, id) => {
    console.log(`data received: ${name} with ${id}`);
});

customEmmiter.on('response', () => {
    console.log(`some other logic here`);
});

customEmmiter.emit('response', 'john', 34);