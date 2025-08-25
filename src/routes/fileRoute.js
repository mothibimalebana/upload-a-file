const express = require('express');
const fileRouter = express.Router();
const { getAllFiles, createUserFile } = require('../controllers/userController');

fileRouter.get('/', getAllFiles);
fileRouter.post('/form', createUserFile);

module.exports = router;
