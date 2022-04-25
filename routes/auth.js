const router = require('express').Router();
const User = require("../models/User")  // as soon as i imported Model here the model is created in mongodb 
const bcrypt = require('bcrypt')

//register user :
router.post("/register", async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({...req.body, password : hashedpassword});
        // newUser.password = hashedpassword
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err){
        console.error(err);
    }
})

module.exports = router