const express = require('express');
const { getAllFiles, createFile } = require('../controllers/homeController');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const homeRouter = express.Router();

homeRouter.get('/', getAllFiles);
homeRouter.post('/upload', upload.single('fileName'), createFile);

module.exports = homeRouter;