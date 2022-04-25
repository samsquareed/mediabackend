const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const app = express()
dotenv.config();

mongoose.connect(process.env.MONGO_URL, ()=>{
    console.log("connected to mongoDb");
})


//middlewares
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))



const PORT = 5000 || process.env.PORT
app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
})