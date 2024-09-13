const express = require('express');
const route = express.Router();
const { makeComment, getComment } = require('../controllers/comment');
const verify = require('../middleware/verify');


route.post('/post', verify, makeComment);
route.get('/post', verify, getComment);
