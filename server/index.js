
const exp = require("constants");
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");
require('dotenv').config();
const userRoute = require('./Route/user.route'); 

const port = process.env.port || 4000;
const uri = process.env.URL || "mongodb://127.0.0.1/Chat_app";
const app = express();

mongoose.set('strictQuery', true);
mongoose.connect(uri).then(()=>{
    console.log("Connected with mongoDb");
}).catch((err)=>{
    console.log(err);
    console.log("error while connecting with mongoDb");
})

app.use(bodyParser.urlencoded({extended:true}))

app.use(cors({
    origin: 'http://localhost:3000', 
    optionsSuccessStatus: 200 
  }));

app.use(express.json());
app.use('/api/users',userRoute);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  

app.get('/', (req,res)=>{
    res.send("Home")
})


app.listen(port ,(req, res)=>{
    console.log(`serever runnning on port ${port}`);
})


