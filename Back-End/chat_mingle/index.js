const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT;

const UserRoute = require('./routes/userRoutes');
const ChatRoute = require('./routes/chatRoute');
const MessageRoute = require('./routes/messageRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Correct CORS configuration
app.use(cors({
    origin: 'http://localhost:5173' // This should match the URL of your React app
}));

mongoose.connect('mongodb://127.0.0.1:27017/ChatMingle').then(() => {
    app.listen(port, () => {
        console.log(`ChatMingle server is running to port : ${port}`);
    });
}).catch((error) => {
    console.log(error);
});

app.use('/user', UserRoute);
app.use('/chat', ChatRoute);
app.use('/message', MessageRoute);
