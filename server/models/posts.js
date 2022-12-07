const data = require('../data/posts.json');

function getPost(id) {
    return data.posts.find( post => post.postId === id );
};

function getPostsByPoster(id) {
    return data.posts.filter( post => post.posterId === id );
};

function getAllPosts() {
    return data.posts;
};

module.exports = {
    getPost,
    getPostsByPoster,
    getAllPosts
};