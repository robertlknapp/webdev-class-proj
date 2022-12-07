let data = require('../data/users.json');

function getUser(id) {
    return data.users.find( user => user.userId === id );
};

function getUserByEmail(email) {
    return data.users.find( user => user.email === email );
};

function getAllUsers() {
    return data;
};

function getFriendsByUser(id) {
    const currentUser = getUser(id);
    return data.users.filter((user) => currentUser.friends.includes(user.userId));
};

function getUsersByName(firstnameNew, lastnameNew) {
    return data.users.filter(user => (user.firstname === firstnameNew && user.lastname === lastnameNew));
};

module.exports = {
    getUser,
    getAllUsers,
    getFriendsByUser,
    getUsersByName,
    getUserByEmail
};