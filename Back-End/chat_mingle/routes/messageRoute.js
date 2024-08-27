const express = require('express');
const {addMessage, getMessage} = require("../controllers/messageController");

const route = express.Router()

route.post("/", addMessage);
route.get("/:chatId", getMessage);


module.exports = route;