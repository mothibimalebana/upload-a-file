const express = require('express');
const userRouter = express.Router();
const { createUser, fetchUser, fetchAllUsers } = require('../controllers/userController');

userRouter.get('/', fetchUser)
userRouter.get('/:id', fetchAllUsers)
userRouter.post('/', createUser);

module.exports = userRouter;
 