const express = require('express');
const userRouter = express.Router();
const { createUser, fetchUser, fetchAllUsers, updateUser, deleteUser } = require('../controllers/userController');

userRouter.get('/', fetchAllUsers);
userRouter.get('/:id', fetchUser);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;
 