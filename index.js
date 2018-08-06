const express = require('express');
const app = express();
let users = require("./state").users;
let id = users.length;

const occupations = ['Developer', 'DBA', 'Math Teacher', 'Math Tutor', 'Customer Service Rep', 'Transcriptionist', 'Engineer', 'Rocket Scientist', 'Plumber', 'Construction Worker', 'Doctor', 'Scientist', 'MMA fighter', 'Software Engineer', 'Front End Developer', 'Web Developer', 'Professional Eater', 'Superhero', 'Lawyer', 'Accountant', 'Mover', 'Fire Fighter', 'Police Officer', 'EMT', 'Nurse practioner'];
const occupationIndex = Math.floor(Math.random()*occupations.length);

const addUser = () => {
    id++;
    const firstNames = ['Bob', 'Joe', 'Bill', 'Jane', 'Sarah', 'Katie'];
    const firstNameIndex = Math.floor(Math.random()*firstNames.length);
    const lastNames = ['Smith', 'Jones', 'Cooper', 'Black', 'White', 'Schmoe'];
    const lastNameIndex = Math.floor(Math.random()*lastNames.length);
    const avatar= 'not available'
    const obj = {
        _id: id,
        name: `${firstNames[firstNameIndex]} ${lastNames[lastNameIndex]}`,
        occuption: occupations[occupationIndex],
        avatar: avatar
    }
    users.push(obj);
}

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/1', (req, res) => {
    res.send(users[0]);
});

app.post('/users', (req, res) => {
    addUser();
    res.send(users[users.length-1]);
});

app.put('/users/1', (req,res) => {
    users[0].occupation = occupations[occupationIndex];
    res.send(users[0]);
})

app.delete('/users/1', (req,res) => {
    const deletedUser = users[0];
    users.splice(0,1);
    res.send(deletedUser);
})

app.listen(3002, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log('Connected');
});