const express = require('express');
const fileRouter = express.Router();
const { getFile, getAllFiles, createFile, updateFile, deleteFile } = require('../controllers/fileController');
const multer = require('multer')
const upload = multer({dest: 'uploads/'})


fileRouter.post('/:userId/form', upload.single('file'), createFile); //tested
fileRouter.put('/:fileId/form', updateFile)
fileRouter.delete('/:fileId', deleteFile)
fileRouter.get('/:userId', getAllFiles);
fileRouter.get('/:userId/:fileId', getFile);


module.exports = fileRouter;
