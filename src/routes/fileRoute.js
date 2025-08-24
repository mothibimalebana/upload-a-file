const express = require('express');
const router = express.Router();
const { getAllFiles, createUserFile } = require('../controllers/userController');

router.get('/', getAllFiles);
router.post('/form', createUserFile);

module.exports = router;
