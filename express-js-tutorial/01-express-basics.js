const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Home page');
});

app.get('/about', (req, res) => {
    res.status(200).send('About page');
});

app.all('*', (req, res) => {
    res.status(404).send('resource not found');
});

app.listen(5000, () => {
    console.log('The server is listening on port: 5000...');
});