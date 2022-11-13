const mongoose = require("mongoose");

const PopularMoviesSchema = new mongoose.Schema({
     title:String,
}, {timestamps:true})

const Popularmovie =   mongoose.model("popularmovie", PopularMoviesSchema);

module.exports = Popularmovie;