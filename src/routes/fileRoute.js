const express = require('express');
const fileRouter = express.Router();
const { fetchAllFiles, fetchFile, createFile, updateFile, deleteFile } = require('../controllers/fileController');

fileRouter.get('/', fetchAllFiles);
fileRouter.get('/:id', fetchFile);
fileRouter.post('/', createFile);
fileRouter.put('/:id', updateFile);
fileRouter.delete('/:id', deleteFile);

module.exports = fileRouter;
 