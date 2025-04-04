const express = require('express');
const app = express();
let {people} = require('./data');

// static assets
app.use(express.static('./methods-public'));
//parse form data
app.use(express.urlencoded({extended: false}));
//parse json
app.use(express.json());

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));

    if (!person) {
        return res.status(404).json({success: false, msg: `no person with id ${req.params.id}`});
    };

    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({success: true, data: newPeople});
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});