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
        res.status(201).json(user);
    } catch(err){
        console.error(err);
    }
})

//login route :
router.post("/login", async (req,res)=>{
    try {
        const user = await User.findOne({email : req.body.email});
        !user && res.status(404).json({message : "user not found"})

        const validPassword = await bcrypt.compare(req.body.password,user.password); 
        // writing these(req.body.password,user.password) in opposite way would give opposite result:
        !validPassword && res.status(400).json({message : "Invalid credentials"})

        res.status(200).json(user)
    } catch (error) {
        console.error(error);
    }
})

module.exports = router