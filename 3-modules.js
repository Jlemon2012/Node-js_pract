// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const secret = 'SUPER SECRET';
const john = 'john';
const peter = 'peter';

const sayHi = (name) => {
    console.log(`Hello there ${name}`);
};

sayHi('susan');
sayHi(john);
sayHi(peter);



// v2
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade')
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);