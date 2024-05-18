require('dotenv').config();
const JWT_SECRET = process.env.jwt_key;
module.exports = {JWT_SECRET}