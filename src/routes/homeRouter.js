const express = require('express');
const { getAllFiles, createFile, updateFile, getFile, deleteFile } = require('../controllers/homeController');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const homeRouter = express.Router();

homeRouter.get('/', getAllFiles);
homeRouter.get('/:id', getFile);
homeRouter.post('/upload', upload.single('fileName'), createFile);
homeRouter.put('/update/:id', upload.single('fileName'), updateFile);
homeRouter.delete('/delete/:id', deleteFile);
module.exports = homeRouter;