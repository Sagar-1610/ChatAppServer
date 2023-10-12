const mongoose = require("mongoose");

const ChatModel = mongoose.Schema({

    chatName:{type:String,trim:true},
    isGroupChat:{type:String,default:false},
    users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
    ],
    latestMessage:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message"
        },
    ],
    groupAdmin:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
    ],
   
},
{
    timestamps:true,
}

);

const chat = mongoose.model("Chat",ChatModel);
module.exports = chat;