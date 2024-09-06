const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const userController = new UserController();

router.post('/register', userController.createUser);
router.get('/users', userController.getUsers);

module.exports = router;
