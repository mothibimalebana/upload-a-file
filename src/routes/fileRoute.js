const express = require('express');
const fileRouter = express.Router();
const { getFile, getAllFiles, createFile, updateFile, deleteFile } = require('../controllers/fileController');

fileRouter.get('/', getAllFiles);
fileRouter.get('/:fileId', getFile)
fileRouter.post('form', createFile);
fileRouter.put('/:fileId/form', updateFile)
fileRouter.delete('/:fileId', deleteFile)

module.exports = fileRouter;
