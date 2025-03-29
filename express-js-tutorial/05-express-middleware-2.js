const express = require('express');
const app = express();
const logger = require('./logger'); //stored in a separate file
const authorize = require('./authorize'); //stored in a separate file

// req => middleware => res

app.use('/api', [logger, authorize]);

app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/api/products', (req, res) => {
    res.send('Products page');
});

app.get('/api/items', (req, res) => {
    res.send('Items page');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});