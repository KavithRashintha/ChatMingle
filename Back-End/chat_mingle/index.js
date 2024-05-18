const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const port=process.env.PORT;

const ChatRoute = require('./routes/chatRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://127.0.0.1:27017/ChatMingle').then(() => {
    app.listen(port , ()=>{
        console.log(`ChatMingle server is running to port : ${port}`);
    })
}).catch((error) => {
    console.log(error);
});

app.use('/chat', ChatRoute);
