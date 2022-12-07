const express = require('express');
const posts = require('../models/posts');

const app = express.Router();

app
    .get('/', (req, res) => {
        res.status(200).send(posts.getAllPosts());
    })
    .get('/:postid', (req, res) => {

        const post = posts.getPost(+req.params.postid);

        if(post) {
            res.status(200).send(post);
        } else {
            res.status(404).send('Post not found');
        };

    })
    .get('/userposts/:postid', (req, res) => {

        const post = posts.getPostsByPoster(+req.params.postid);

        if(post) {
            res.status(200).send(post);
        } else {
            res.status(404).send('Post not found');
        };

    });


module.exports = app;