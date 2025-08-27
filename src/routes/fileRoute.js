const express = require('express');
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const fileRouter = express.Router({mergeParams: true});
const { getFile, getAllFiles, createFile, updateFile, deleteFile } = require('../controllers/fileController');



fileRouter.delete('/:fileId', deleteFile)

fileRouter.get('/', getAllFiles); //tested
fileRouter.get('/:fileId', getFile);//tested
fileRouter.post('/form', upload.single('file'), createFile); //tested
fileRouter.put('/form/:fileId', upload.single('file'), updateFile) //tested


module.exports = fileRouter;
