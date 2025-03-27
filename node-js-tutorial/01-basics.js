// const app = require('express')(); - an example of invoking the express server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('user hit the resource');
    res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
    console.log('user hit the about page');
    res.status(200).send('About Page');
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>resouce not found</h1>');
});

app.listen(5000, () => {
    console.log('The server is listening on port: 5000');
});