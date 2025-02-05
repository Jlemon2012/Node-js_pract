const fs = require('fs');
const read = fs.readFileSync;
const write = fs.writeFileSync;
console.log('start');
const first = read('./content/first.txt', 'utf8');
const second = read('./content/second.txt', 'utf8');

console.log(first, second);

write(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    { flag: 'a'},
);

console.log('done with this task');
console.log('starting the next one');