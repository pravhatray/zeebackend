const express = require("express");
const Topratedmovie = require('../model/Popularmovies.schema')
const bcrypt = require("bcrypt");

 const app = express.Router();

 app.get("/",async(req,res)=>{
         let data = await Topratedmovie.find();
         res.send(data);
 })


 app.get("/:id",async(req,res)=>{

    let {id}=req.params;
  
    try {
        let movie = await Topratedmovie.findById(id)
        res.status(200).send(movie)
    
    } catch (error) {
        console.log(error);
        res.status(401).send(error.message)
    }
 })


module.exports = app;