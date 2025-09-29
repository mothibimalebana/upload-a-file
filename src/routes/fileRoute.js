const express = require('express');
const fileRouter = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const { fetchAllFiles, fetchFile, createFile, updateFile, deleteFile } = require('../controllers/fileController');

fileRouter.get('/', fetchAllFiles);
fileRouter.get('/:id', fetchFile);
fileRouter.post('/', upload.single('file'), createFile);
fileRouter.put('/:id', upload.single('file'), updateFile);
fileRouter.delete('/:id', deleteFile);

module.exports = fileRouter;
 