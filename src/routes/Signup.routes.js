const express = require("express");
const User = require("../model/UserSchema");
const bcrypt = require("bcrypt");
const signUpRoute  = express.Router();
const nodemailer = require("nodemailer")


const transport = nodemailer.createTransport({
   host: 'smtp.gmail.com',
   port: 465,
   auth: {
       user: 'rohit099yadav1997@gmail.com',
       pass: 'flchpuibukebmxic'
   }
});



signUpRoute.post("/", async(req, res)=>{
      const {email, password, name} = req.body;
   try{
          let user = await User.findOne({email: email});
           if(!user){
            console.log("done")
            let data= new User(req.body);
            data.password = await bcrypt.hash(password, 10)
            await data.save();

              sendMail(email, name)
          

             res.send({
                data: data, 
                message :  "User Register SuccessFully"});
             return
            }else{
               res.status(401).send({
                  error: "User Already Exist"
                })
      
            }
           
        
   }catch(e){
        res.send(e.message)
   }
    
})

module.exports = signUpRoute


const sendMail  = (email, name)=>{
   transport.sendMail({
      to:  email,
      from: "apnetv@apnetv.com",
      subject: "Welcome",
      text: `Hello ${name},
              
              Welcome !!!

              You Succesfully register to Our Website Happy to use Apne TV 

            Apne TV
               
      
      `
  }).catch((e)=>{
   console.log(e.message, "error")
  })   
}