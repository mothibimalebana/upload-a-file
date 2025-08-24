const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');


router.get('/', getAllUsers);
router.post('/form', createUser)
router.put('/:id/form', updateUser);
router.delete('/:id', deleteUser)

module.exports = router;
 