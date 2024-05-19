const mongoose = require('mongoose');
require("dotenv").config();


const db_pass = process.env.db_pass;
mongoose.connect(`mongodb+srv://Database1:${db_pass}@cluster0.vyaqywh.mongodb.net/paytm`)


const accountSchema = mongoose.Schema({
    userId :{ type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
});

const userSchema = mongoose.Schema({
    username : String,
    firstName : String,
    lastName : String,
    password : String
})

const User = mongoose.model("User",userSchema);
const Account = mongoose.model("Account",accountSchema);
module.exports = {
    User,
    Account
}

