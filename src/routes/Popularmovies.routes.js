const express = require("express");
const Popularmovie = require('../model/Popularmovies.schema')
const bcrypt = require("bcrypt");

 const app = express.Router();

 app.get("/",async(req,res)=>{
         let data = await Popularmovie.find();
         res.send(data);
 })

 app.get("/", async(req,res)=>{

    
   if(Object.keys(req.query).length!==0){
    let {title} = req.query;
   
  
    try {
        console.log(title);
        let movie = await Popularmovie.findOne({'title':title})
        res.status(200).send(movie)
    
    } catch (error) {
        console.log(error);
        res.status(401).send(error.message)
    }
   }
 })


 app.get("/:id",async(req,res)=>{

    let {id}=req.params;
  
    try {
        let movie = await Popularmovie.findById(id)
        res.status(200).send(movie)
    
    } catch (error) {
        console.log(error);
        res.status(401).send(error.message)
    }
 })


module.exports = app;