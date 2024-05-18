const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config.js');
const {User} = require('../db.js');

const userSignupObject = zod.object({
    username : zod.string().email(),
    firstName : zod.string(),
    lastName : zod.string(),
    password : zod.string()
})

const userSigninObject = zod.object({
    username : zod.string().email(),
    password : zod.string()
});

const userRouter = express.Router();

userRouter.post('/signup',async (req,res,next)=>{

    if (!userSignupObject.safeParse(req.body).success){
        return res.status(411).json({
            "msg" : "Incorrect inputs"
        })
    }

    const doesExists = await User.findOne({
        username : req.body.username
    })

    if (doesExists){
        return res.status(411).json({
            msg : "User already exists !!!"
        })
    }else{
        const createdUser  = await User.create({
            username : req.body.username,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            password : req.body.password
        });
        const userId = createdUser._id;
        const token = jwt.sign({userId},JWT_SECRET);

        res.status(200).json({
            "msg" : "user successfully created",
            "token" : token
        });
    }

})
userRouter.post('/signin',async (req,res)=>{
    
    if (!userSigninObject.safeParse(req.body).success){
        res.status(411).json({
            "msg" : "Incorrect input"
        })
    }

    const userExists = await User.findOne({
        username : req.body.username,
        password : req.body.password
    })
    
    if (userExists){
        const userId = userExists._id;
        return res.status(200).json({
            "token" : jwt.sign({userId},JWT_SECRET)
        });
    }else{
        return res.status(403).json({
            "msg" : "Invalid Credentials"
        });
    }

})
module.exports = {userRouter};