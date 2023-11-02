//console.log("Hello Everyone");


const express = require("express");
const mongoose = require("mongoose");
const route = require ("./Routes/Route");
const app = express();
app.use(express.json());
app.use("/",route);

//const { default: mongoose } = require("mongoose");
//const app = express();
//TEST API
app.get("/test",(req,res)=>{        //()-method
  res.send("Hello Everyone, This is test API");
});
app.listen(5000,() => {
console.log("server is running on Port 5000")
});


//DB connectionn
mongoose
    .connect(
        "mongodb+srv://Misbah:misbahzohar@cluster0.bmovhrv.mongodb.net/"
    )
    .then(()=> {
            console.log("Database is connected succesfully")

    })
    .catch((err)=>{
        console.log(err,"something went wrong");
    });
