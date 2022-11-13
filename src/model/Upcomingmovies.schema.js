const mongoose = require("mongoose");

const UpcomingmoviesSchema = new mongoose.Schema({
     title:String,
}, {timestamps:true})

const Upcomingmovie =   mongoose.model("upcomingmovie", UpcomingmoviesSchema);

module.exports = Upcomingmovie;