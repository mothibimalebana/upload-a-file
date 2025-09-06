const express = require('express');
const userRouter = express.Router();
const { getUser, createUser} = require('../controllers/userController');


userRouter.post('/login', getUser);
userRouter.post('/signup', createUser);


module.exports = userRouter;
 