// event loop - is what allows Node.js to perfrom non-blocking I/O operations,
// despite the fact that JS is single-threaded - by offloading operations
// to the system kernel whenever possible - https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick
// requests is comming in, the backend register a CB, after it is completed, it will be executed

const fs = require('fs');

const readFile = fs.readFile;

console.log('started a first task');
//Check File Path!!!
readFile(
    './content/first.txt',
    'utf8',
    (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        console.log('completed first task');
    }
)
console.log('starting next task');