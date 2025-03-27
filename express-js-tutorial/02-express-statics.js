const express = require('express');
const path = require('path');

const app = express();

//setup static and middleware
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html')); // this can be deleted and index.html just added to exress.static
    // 1st option - adding to static assets
    // 2nd option - SSR
});

app.all('*', (req, res) => {
    res.status(404).send('resource not found');
});

app.listen(5000, () => {
    console.log('The server is listening on port: 5000...');
});

