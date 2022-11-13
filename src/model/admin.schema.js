const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  backdrop_path: { type: String, required: true },
  genre_ids: { type: Array, required: true },
  original_language: { type: String, required: true },
  overview: { type: String, required: true },
  popularity: { type: String, required: true },
  poster_path: { type: String, required: true },
  release_date: { type: String, required: true },
  title: { type: String, required: true },
  video: { type: String, required: true },
  ratings: { type: String, required: true },
});

const Movie=mongoose.model("movie",adminSchema)
module.exports=Movie
