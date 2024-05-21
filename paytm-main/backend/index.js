const express = require("express");
const { mainRouter } = require("./routes");
const { userRouter } = require("./routes/user");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
// app.get("/api/v1",(req,res)=>{
//     res.send("working /");
// })
app.use("/api/v1",mainRouter);

app.listen(3000);
