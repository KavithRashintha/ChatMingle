const express = require('express');
const chatController = require('../controllers/chatController');

const route =  express.Router();

route.post("/", chatController.createChat);
route.get("/:userId", chatController.userChat);
route.get("/findChat/:firstId/:secondId", chatController.findChat)

module.exports=route;