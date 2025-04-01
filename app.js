const express = require('express');
const app = express();
let {people} = require('./data');

// static assets
app.use(express.static('./methods-public'));
//parse form data
app.use(express.urlencoded({extended: false}));
//parse json
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).json({sucess: true, data: people});
});

app.post('/api/people', (req, res) => {
    const {name} = req.body;
    if (!name) {
        return res.status(401).json({success: false, msg:'please provide name value'});
    };
    res.status(201).json({success: true, person: name});
});

app.post('/login', (req, res) => {
    const {name} = req.body;
    if (name) {
        return res.status(201).send(`Welcome ${name}`);
    };

    res.status(401).send('Please Provide Credentials');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});