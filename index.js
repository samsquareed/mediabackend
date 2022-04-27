const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const app = express()
dotenv.config();
const cors = require('cors')

//routes :
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

mongoose.connect(process.env.MONGO_URL, ()=>{
    console.log("connected to mongoDb");
})


//middlewares
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(cors())

//custom routes middlewares
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

const PORT = 5000 || process.env.PORT
app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
})