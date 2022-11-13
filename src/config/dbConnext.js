const mongoose = require("mongoose");

const dbConnect = ()=>{
   // mongodb://localhost:27017/Zee5
    return  mongoose.connect("mongodb+srv://moneyforey:iRar0V9ZQhGRUpfm@cluster0.indvxl7.mongodb.net/ApnaTv").catch((e)=>{
        console.log(e.message)
    })
}

module.exports = dbConnect;