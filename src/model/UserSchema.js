const mongoose = require("mongoose");

const useSchema = new mongoose.Schema({
     name: {type: String, trim: true, required: true},
     email: {type:String, trim: true, required: true, unique: true},
     password : {type: String, required: true},
}, {timestamps:true})

const User =   mongoose.model("User", useSchema);

module.exports = User;
