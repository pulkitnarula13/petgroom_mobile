const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const port = process.env.port || 4000;

const mongodb = "mongodb+srv://PetGroom:PetGroom@cluster0.0w18s6p.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongodb,(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Connected to MongoDB");
    }
});


app.listen(port,(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(`server is running on the port number ${port}`);
    }
})
