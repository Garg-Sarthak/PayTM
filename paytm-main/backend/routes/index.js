const express = require('express');
const { userRouter } = require('./user');
const { authMiddleware } = require('./middleware');
const zod = require('zod');
const { User } = require('../db');
const { accountRouter } = require('./account');

const mainRouter = express.Router();

mainRouter.use("/user",userRouter)
mainRouter.use("/account",accountRouter)
mainRouter.put("/",authMiddleware,(req,res) => {
    const password = req.body.password;
})



module.exports = {mainRouter}

