const express = require('express');
const userRouter = express.Router();
const { createUser } = require('../controllers/userController');

userRouter.post('/signup', createUser);


module.exports = userRouter;
 