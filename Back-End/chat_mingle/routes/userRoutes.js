const express = require('express');
const userController = require('../controllers/userController');

const route = express.Router();

route.post("/register", userController.registerUser);

module.exports=route;