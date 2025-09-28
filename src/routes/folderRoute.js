const express = require('express');
const folderRouter = express.Router();
const { createUser, fetchUser, fetchAllUsers, updateUser, deleteUser } = require('../controllers/userController');

folderRouter.get('/', fetchAllUsers);
folderRouter.get('/:id', fetchUser);
folderRouter.post('/', createUser);
folderRouter.put('/:id', updateUser);
folderRouter.delete('/:id', deleteUser);

module.exports = folderRouter;
 