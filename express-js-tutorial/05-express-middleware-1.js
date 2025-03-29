const express = require('express');
const app = express();

// req => middleware => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    //res.send('Testing'); - it does not pass to the homepage while we do not pass the access to 'next' middleware
    next(); // needs to be invoked to pass it to the next middleware
};

app.get('/', logger, (req, res) => {
    res.send('Home page');
});

app.get('/about', logger, (req, res) => {
    res.send('About page');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});