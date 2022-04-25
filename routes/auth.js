const router = require('express').Router();
const User = require("../models/User")  // as soon as i imported Model here the model is created in mongodb 

//register user :
router.post("/register", async (req,res)=>{

    const user = new User(req.body)
    
    await user.save()
    res.send("ok")
})

module.exports = router