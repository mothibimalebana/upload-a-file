const express = require('express');
const folderRouter = express.Router();
const { fetchAllFolder, fetchFolder, createFolder, updateFolder, deleteFolder } = require('../controllers/folderController');

folderRouter.get('/', fetchAllFolder);
folderRouter.get('/:id', fetchFolder);
folderRouter.post('/', createFolder);
folderRouter.put('/:id', updateFolder);
folderRouter.delete('/:id', deleteFolder);

module.exports = folderRouter;
 