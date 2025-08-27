const express = require('express');
const userRouter = express.Router();
const { createUser, updateUser, deleteUser } = require('../controllers/userController');


userRouter.post('/sign-up', createUser)
userRouter.put('/:userId/form', updateUser);
userRouter.delete('/:userId', deleteUser);

module.exports = userRouter;
 