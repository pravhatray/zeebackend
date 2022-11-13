const express = require("express");
const User = require("../model/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRoute = express.Router();
const sceretkey = "qwertyuiop"


 userRoute.post("/", async (req, res)=>{
     const {email, password} = req.body;
    //  console.log(email, password, "h0")
     try{
        if(email && password){
          let user  = await User.findOne({email: email});
              const result = await  bcrypt.compare(password, user.password);
              if(user.email && result){ 
                   let token = jwtToken(email, user._id)
                   
                    res.send({
                        token: token
                    });
                }else{
                res.status(400).send("Wrong Credntial")
              }
         }
         else{       
             console.log("done")
            res.status(400).send("User Doesn't Exist")
        }
     }
     catch(e){
        res.status(500).send(e.message)
     }
 })  


module.exports = userRoute;


const jwtToken=(email, id)=>{
     let  token = jwt.sign({email: email, id: id} , sceretkey, {
        expiresIn : "24 hours"
     })
     return token
}