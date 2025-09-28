const express = require('express');
const fileRouter = express.Router();
const { createUser, fetchUser, fetchAllUsers, updateUser, deleteUser } = require('../controllers/userController');

fileRouter.get('/', fetchAllUsers);
fileRouter.get('/:id', fetchUser);
fileRouter.post('/', createUser);
fileRouter.put('/:id', updateUser);
fileRouter.delete('/:id', deleteUser);

module.exports = fileRouter;
 