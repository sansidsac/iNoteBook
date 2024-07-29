const express = require('express');
const User=require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const router = express.Router();


// Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async(req, res) => {
// If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the user with this email exists already
    try{
    
    let user = await User.findOne({ email: req.body.email });
    if(user){
        return res.status(400).json({error:"Sorry a user with this email already exists"})
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
    })
        // .then(user=>res.json(user))
        // .catch(err=>{console.log(err);
        // res.json({error:"Please enter a unique value for email"})});

    data={
        user:{
            id:user.id
        }
    }
    const JWT_SECRET="Sanjuisagoodb$oy";
    const authtoken=jwt.sign(data,JWT_SECRET);
    res.json({authtoken});
    
    // res.json({user})

    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router