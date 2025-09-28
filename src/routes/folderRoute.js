const express = require('express');
const folderRouter = express.Router();
const { fetchFile, fetchAllFiles, createFile, updateFile, deleteFile } = require('../controllers/fileController');

folderRouter.get('/', fetchAllFiles);
folderRouter.get('/:id', fetchFile);
folderRouter.post('/', createFile);
folderRouter.put('/:id', updateFile);
folderRouter.delete('/:id', deleteFile);

module.exports = folderRouter;
 