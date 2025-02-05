const fs = require('fs');
const readAsync = fs.readFile;
const writeAsync = fs.writeFile;

console.log('start');

readAsync(
    './content/first.txt',
    'utf8',
    (err, result) => {
        if(err) {
            console.log(err);
            return;
        };
        const first = result;
        readAsync(
            './content/second.txt',
            'utf8',
            (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                };
                const second = result;
                writeAsync(
                    './content/result-async.txt',
                    `Here is the result: ${first}, ${second}`,
                    {flag: 'a'},
                    (err, result) => {
                        if(err) {
                            console.log(err);
                            return;
                        };
                        console.log('done with this task');
                    },
                );
            },
        );
    },
);

console.log('starting next task');