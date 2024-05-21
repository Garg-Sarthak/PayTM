const express = require('express');
const { User, Account } = require('../db');
const { authMiddleware } = require('./middleware');
const { userRouter } = require('./user');
const { default: mongoose } = require('mongoose');
require("dotenv").config();


const db_pass = process.env.db_pass;
const accountRouter = express.Router();

module.exports = {accountRouter};
mongoose.connect(`mongodb+srv://Database1:${db_pass}@cluster0.vyaqywh.mongodb.net/paytm`)

accountRouter.get("/balance",async (req,res)=>{

    const userFound = await User.find({
        username : req.body.username,
        password : req.body.password
    })
    if (!userFound.length){
        return res.status(403).json({
            "message" : "User not found/ Incorrect inputs"
        })
    }
    const userId = userFound[0]._id;
    

    const account = await Account.findOne({
        userId : userId
    })
    
    return res.status(200).json({
        "balance" : account.balance
    });

})

accountRouter.post("/transfer", authMiddleware,async (req,res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const {amount, to } = req.body;

    const account = await Account.findOne({
        userId : req.userId
    }).session(session)

    if (!account || account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            "message" : "Insufficent balance"
        });
    }

    const toAccount = await Account.findOne({
        userId : to
    }).session(session);

    if (!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            "details" : req.body,
            "message" : "Invalid account Error here"
        })
    }

    await Account.updateOne({ userId : req.userId}, {$inc : {balance : -amount}}).session(session);
    await Account.updateOne ({userId : to}, {$inc : {balance : amount}}).session(session);

    await session.commitTransaction();
    res.json({
        "message" : 'Transfer successful'
    });
});