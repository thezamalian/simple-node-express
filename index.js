const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

// app.METHOD();
app.get('/', (req, res) => {
    res.send('Wow, I am learning Node & Express with Nodemon - automatic restart');
});

const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '017999999999' },
    { id: 1, name: 'Rongila', email: 'Rongila@gmail.com', phone: '017999999999' },
    { id: 2, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '017999999999' },
    { id: 3, name: 'Micky john', email: 'Micky-john@gmail.com', phone: '017999999999' },
    { id: 4, name: 'Munshi mia', email: 'Munshi mia@gmail.com', phone: '017999999999' },
    { id: 5, name: 'Mr Doctor', email: 'Mr Docto@gmail.com', phone: '017999999999' },
    { id: 6, name: 'Kashem', email: 'Kashem@gmail.com', phone: '017999999999' },
];

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users);
    }

});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

// dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];

    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana', 'apple']);
});
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy yummy tok marka fazli');
});


app.listen(port, () => {
    console.log('Listening to port: ', port);
});