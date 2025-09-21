const express = require('express');
const { getAllFiles, createFile, updateFile, getFile, deleteFile, getFolders, getFolder, createFolder, updateFolder } = require('../controllers/fileController');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const homeRouter = express.Router();

homeRouter.get('/', getAllFiles);

homeRouter.get('/:id', getFile);
homeRouter.get('/folder/:id', getFolder);

homeRouter.post('/upload', upload.single('fileName'), createFile);
homeRouter.post('/folder/create', createFolder);

homeRouter.put('/update/:id', upload.single('fileName'), updateFile);
homeRouter.put('/folder/update/:id', updateFolder);

homeRouter.delete('/folder/delete/:id', deleteFile);
homeRouter.delete('/delete/:id', deleteFile);

module.exports = homeRouter;