const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const app = express()
dotenv.config();

//routes :
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

mongoose.connect(process.env.MONGO_URL, ()=>{
    console.log("connected to mongoDb");
})


//middlewares
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

//custom routes middlewares
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


const PORT = 5000 || process.env.PORT
app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
})