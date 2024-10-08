const ChatModel = require('../models/chatSchema');

const createChat = async(req, res)=> {
    const newChat = new ChatModel({
        users: [req.body.senderId, req.body.receiverId]
    });

    try{
        const result = await  newChat.save();
        res.status(200).json(result);
    }catch(error){
        res.status(500).json(error)
    }
}

const userChat = async(req,res)=>{
    try {
        const chat = await ChatModel.find({
            users: {$in: [req.params.userId]}
        })
        res.status(200).json(chat);
    }catch(error){
        res.status(500).json(error);
    }
}

const findChat = async(req,res)=>{
    try{
        const chat = await ChatModel.findOne({
            users: {$all: [req.params.firstId, req.params.secondId]}
        })
        res.status(200).json(chat);
    }catch (error) {
        res.status(500).json(error)
    }
}

module.exports={
    createChat,
    userChat,
    findChat
}
