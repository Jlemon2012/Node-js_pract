const http = require('http');
const fs = require('fs');
const { setHeapSnapshotNearHeapLimit } = require('v8');

const readFileSync = fs.readFileSync;

//get all files
const homePage = readFileSync('./index.html');

const server = http.createServer((req, res) => {
    const url = req.url;
    // home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage);
        res.end();
    }
    else if (url === '/about') {

    }
    else {

    };
});