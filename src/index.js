const express = require("express");
const dbConnect = require("./config/dbConnext");
const userRoute = require("./routes/User.routes");
const signUpRoute = require("./routes/Signup.routes");
const popularmovieRoute = require("./routes/Popularmovies.routes");
const upcomingmovieRoute = require("./routes/Upcomingmovies.routes");
const topratedmovieRoute = require("./routes/Topratedmovies.routes");
const adminRoute=require("../src/routes/admin.router")
const cors = require("cors");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/login", userRoute);
app.use("/register", signUpRoute);
app.use("/popularmovies", popularmovieRoute);
app.use("/upcomingmovies", upcomingmovieRoute);
app.use("/topratedmovies", topratedmovieRoute);
app.use("/movieadmin",adminRoute);

app.get("/", (req, res)=>{
  res.sendFile(__dirname + '/todo.txt')
})



app.listen(PORT, async () => {
  await dbConnect();+
  
  console.log(`http://localhost:${PORT}`);
});
