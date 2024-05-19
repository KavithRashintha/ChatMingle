const MessageModel = require('../models/messageSchema');

const addMessage = async(req,res)=>{
    const {chatId, senderId, message} = req.body;
    const newMessage = new MessageModel({
        chatId,
        senderId,
        message
    });

    try {
        const result = await newMessage.save();
        res.status(200).json(result);
    }catch (error){
        res.status(500).json(error);
    }
}

const getMessage = async(req, res)=>{
    const {chatId} = req.params;

    try {
        const result = await MessageModel.find({chatId});
        res.status(200).json(result);
    }catch (error){
        res.status(error).json(error);
    }
}
module.exports={
    addMessage,
    getMessage
}