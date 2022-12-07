const express = require('express');
const users = require('../models/users');

const app = express.Router();

app
    .get('/', (req, res) => {
        res.status(200).send(users.getAllUsers());
    })
    .get('/:userid', (req, res) => {

        const user = users.getUser(+req.params.userid);
        if(user) {
            res.status(200).send(user);
        } else {
            res.status(404).send('User not found');
        };

    })
    .get('/friends/:userid', (req, res) => {
        const userFriends = users.getFriendsByUser(+req.params.userid);

        if(userFriends) {
            res.status(200).send(userFriends);
        } else {
            res.status(404).send('User not found');
        };

    })
    .get('/name/:fullname', (req, res) => {
        let fullName = (req.params.fullname).split(" ");
        let newUsers;

        if(fullName.length > 1) {
            //fullName[0] = fullName[0].charAt(0).toUpperCase() + fullName[0].slice(1);
            //fullName[1] = fullName[1].charAt(0).toUpperCase() + fullName[1].slice(1);
            newUsers = users.getUsersByName(fullName[0], fullName[1]);
        };

        if(newUsers) {
            res.status(200).send(newUsers);
        } else {
            res.status(404).send('User not found');
        };
    })
    .get('/login/:email', (req, res) => {
        const user = users.getUserByEmail(req.params.email);

        if(user) {
            res.status(200).send(user);
        } else {
            res.status(404).send('User not found for login');
        };
    });

module.exports = app;