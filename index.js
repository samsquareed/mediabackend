const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const app = express()

dotenv.config();

const PORT = 5000 || process.env.PORT

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
})