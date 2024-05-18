const mongoose = require('mongoose');

const chatSchema = mongoose.Schema(
    {
        users: {
            type: Array,
        },
    },
    {
        timeStamp: true,
    }
)

module.exports = mongoose.model('chat', chatSchema);