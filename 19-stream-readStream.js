//Stream
const fs = require('fs');

const createReadStream = fs.createReadStream;

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf8'});

// default 64kb of the chunk size
// last buffer - remainder
// highWaterMark - control size

stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', (err) => {
    console.log(err);
});