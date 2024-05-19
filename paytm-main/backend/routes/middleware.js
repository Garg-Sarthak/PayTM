const { JWT_SECRET } = require("../config.js");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId;

        next();
    } catch (err) {
        return res.status(403).json({});
    }
};

module.exports = {
    authMiddleware
}


/* MY CODE */
// const express = require('express');
// const { JWT_SECRET } = require('../config');
// const jwt = requrie('jsonwebtoken');

// function authMiddleware(req,res,next){
//     const auth = req.headers.authorization;

//     if (!auth || !auth.startsWith("Bearer ")){
//         return res.status(403).json({});
//     }

//     const token = auth.split(' ')[1];
//     jwt.verify(token,JWT_SECRET,function(err,decoded){
//         if (err){
//             return res.status(403).json({});
//         }else{
//             req.userId = decoded.userId;
//             next();
//         }
//     })
// }

// module.exports = {
//     authMiddleware
// }