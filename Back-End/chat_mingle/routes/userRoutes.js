const express = require('express');
const userController = require('../controllers/userController');

const route = express.Router();

route.post("/register", userController.registerUser);
route.post("/login", userController.loginUser);
route.get('/:id', userController.getUser);

module.exports=route;