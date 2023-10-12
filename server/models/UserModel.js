const mongoose = require("mongoose");

const UserModel = mongoose.Schema({

    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    pic:{type:String,require:true}
},
{
    timestamps:true
})

const usermodel = mongoose.model("User",UserModel);
module.exports = usermodel;