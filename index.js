require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {readdirSync} = require('fs')
const app = express();

mongoose.set('strictQuery', false)
const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
} 
app.get('/',(req,res)=>{
  res.send("hello pradheep tmr")
})
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// to serve images inside public folder
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

app.listen(5000, () => {
    connect();
    console.log("Connected to backend.");
  });