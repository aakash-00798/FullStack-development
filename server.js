const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json())
app.use(cors());
const mongoose = require('mongoose');

//import the database

const news = require('./db');

//connect database

mongoose.connect('mongodb://localhost:27017/news').then(() => {
    console.log("connected to mongodb")
}).catch((err)=>{
    console.error("mongodb is not connected",err)
})


app.get('/home',async(req,res)=>{

    try{
        const article = await news.find();
        res.json(article);
    }
    catch(error){
        console.error(error);
    }
})
const PORT=3000;

// start server
app.listen(PORT,()=>{
    console.log(`server is running in http://localhost:${PORT}`);
})
