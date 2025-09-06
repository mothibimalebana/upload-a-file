const express = require('express');
const userRouter = express.Router();
const { getAllUsers, createUser} = require('../controllers/userController');


userRouter.post('/login', getAllUsers);
userRouter.post('/signup', createUser)

module.exports = userRouter;
 