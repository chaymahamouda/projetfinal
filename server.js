const express=require ("express");
const connectDB=require('./config/dbConnect');
const cors = require("cors");
const app=express();
require('dotenv').config();
//connect to DB
connectDB();
app.use(cors());



//routes
app.use(express.json());
app.use("/user", require("./routes/user"));
app.use("/voyage", require("./routes/VoyageRouter"));
app.use("/reservation", require("./routes/ReservationRouter"));





//server
const PORT = process.env.PORT;
app.listen(PORT,(err)=>err ? console.log(err):
console.log(`server is running on ${PORT}`));