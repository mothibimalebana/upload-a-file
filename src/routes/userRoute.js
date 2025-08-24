const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, updateUser } = require('../controllers/userController');


router.get('/', getAllUsers);
router.post('/form', createUser)
router.put('/:id/form', updateUser);

module.exports = router;
 