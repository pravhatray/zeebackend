const express=require("express")
const MovieSchema=require("../model/admin.schema")
const UserSchema=require("../model/UserSchema")

const app=express.Router()

// usersss Crud operation by admin

app.get("/users",async(req,res)=>{
  
    try {
        let data=await UserSchema.find()
        res.status(200).send(data)
    
    } catch (error) {
        console.log(error);
        res.status(401).send(error.message)
    }
})

app.delete("/users/:id",async(req,res)=>{
    let {id}=req.params
  
    try {
        let data=await UserSchema.findByIdAndDelete(id)
        console.log(data)
        res.status(200).send(data)
    
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
    }
})

app.get("/users/:id",async(req,res)=>{
    let {id}=req.params
  
    try {
        let data=await UserSchema.findById(id)
        res.status(200).send(data)
    
    } catch (error) {
        console.log(error);
        res.status(401).send(error.message)
    }
})

app.patch("/users/:id",async(req,res)=>{
    let {id}=req.params
  
    try {
        let data=await UserSchema.findByIdAndUpdate(id,{...req.body},{new:true})
        res.status(200).send(data)
    
    } catch (error) {
        console.log(error);
        res.status(401).send(error.message)
    }
})


// Moviesss Crud operation by admin

app.get("/",async(req,res)=>{
  
    try {
        let data=await MovieSchema.find()
        res.status(200).send(data)
    
    } catch (error) {
        console.log(error);
        res.status(401).send(error.message)
    }
})

app.post("/",async(req,res)=>{
    try {
        let newMovie=new MovieSchema({...req.body})
        await newMovie.save()
        res.send(newMovie)
    } catch (error) {
        console.log(error)
        res.status(401).send(error.message)
    }
})

app.get("/:id",async(req,res)=>{
    let {id}=req.params
  
    try {
        let data=await MovieSchema.findById(id)
        res.status(200).send(data)
    
    } catch (error) {
        console.log(error);
        res.status(401).send(error.message)
    }
})

app.delete("/:id",async(req,res)=>{
    let {id}=req.params
  
    try {
        let data=await MovieSchema.findByIdAndDelete(id)
        console.log(data)
        res.status(200).send(data)
    
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message)
    }
})

app.patch("/:id",async(req,res)=>{
    let {id}=req.params
  
    try {
        let data=await MovieSchema.findByIdAndUpdate(id,{...req.body},{new:true})
        res.status(200).send(data)
    
    } catch (error) {
        console.log(error);
        res.status(401).send(error.message)
    }
})

module.exports=app
