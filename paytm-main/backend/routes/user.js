const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config.js');
const {User, Account} = require('../db.js');
const { authMiddleware } = require('./middleware.js');

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
        await Account.create({
            userId : userId,
            balance : 1 + Math.random()*10000
        })
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


userRouter.put("/", authMiddleware, async (req, res) => {
    const updateBody = zod.object({
        password: zod.string().optional(),
        firstName: zod.string().optional(),
        lastName: zod.string().optional(),
    })
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

		await User.updateOne({ _id: req.userId }, req.body);
	
    res.json({
        message: "Updated successfully"
    })
})


userRouter.get("/bulk",async (req,res)=>{

    const filter = req.query.filter || "";
    console.log(filter);

    if (filter){
        const usersFound = await User.find({
            $or : [{firstName : {"$regex" : filter}},{lastName : {"$regex" : filter}}]
        });
        
        res.status(200).json({
            users : usersFound.map(user => ({
                username : user.username,
                firstName : user.firstName,
                lastName : user.lastName,
                id : user._id
            }))
        });
    }

})

module.exports = {userRouter};