const mongoose = require('mongoose');
require("dotenv").config();


const db_pass = process.env.db_pass;
mongoose.connect(`mongodb+srv://Database1:${db_pass}@cluster0.vyaqywh.mongodb.net/paytm`)



const userSchema = mongoose.Schema({
    username : String,
    firstName : String,
    lastName : String,
    password : String
})

const User = mongoose.model("User",userSchema);
// User.create({
//     username : "Sarthak",
//     password : "admin"
// });

module.exports = {
    User
}

