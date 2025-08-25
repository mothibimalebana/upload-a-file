const express = require('express');
const fileRouter = express.Router();
const { getFile, getAllFiles, createFile, updateFile, deleteFile } = require('../controllers/fileController');

fileRouter.get('/files', getAllFiles);
fileRouter.get('/files/:fileId', getFile)
fileRouter.post('file/form', createFile);
fileRouter.put('/file/:id/form', updateFile)
fileRouter.delete('files/:fileId', deleteFile)

module.exports = fileRouter;
