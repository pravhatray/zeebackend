const mongoose = require("mongoose");

const TopratedmoviesSchema = new mongoose.Schema({
     title:String,
}, {timestamps:true})

const Topratedmovie =   mongoose.model("topratedmovie", TopratedmoviesSchema);

module.exports = Topratedmovie;