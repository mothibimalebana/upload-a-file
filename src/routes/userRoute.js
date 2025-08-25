const express = require('express');
const userRouter = express.Router();
const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');


userRouter.get('/', getAllUsers);
userRouter.post('/form', createUser)
userRouter.put('/:id/form', updateUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;
 