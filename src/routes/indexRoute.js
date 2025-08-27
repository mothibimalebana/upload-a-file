const express = require('express');
const { loginController } = require('../controllers/indexController');
const indexRouter = express.Router();


indexRouter.post('/login', loginController);
indexRouter.post('sign-up', signUpController );

module.exports={indexRouter}