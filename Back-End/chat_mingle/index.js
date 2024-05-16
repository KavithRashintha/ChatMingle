const express = require('express');
const mongoose = require('mongoose');

import ChatRoute from "./routes/chatRoute";

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/ChatMingle').then(()=>{
    app.listen(3000, ()=>{
        console.log("Server is running");
    })
}).catch((error=>{
    console.log(error)
}))

app.use("/chat", ChatRoute)