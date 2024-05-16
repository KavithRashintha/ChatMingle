import mongoose from 'mongoose'

const messageSchema = mongoose.Schema(
    {
        chatId: {
            type: String
        },
        senderId: {
            type: String
        },
        message: {
            type: String
        },
    },
    {
        timeStamp:true
    }
)

module.exports = mongoose.model('message', messageSchema);