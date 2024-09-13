const express = require('express');
const routes = express.Router();
const { createUser, loginUser} = require('../controllers/user');
const verify = require('../middleware/verify');

routes.post('/user', verify, createUser);
routes.post('/login-user', verify, loginUser);

module.exports = routes;