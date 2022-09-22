const mongoose = require("mongoose");
const reservationSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
       }, 
       LastName:{
        type:String,
        required:true,
       }, 
       email:{
        type:String,
        required:true,
       }, 
       PhoneNumber:{
        type:String,
        required:true,
       }, 
       Expirydate:{
          type:String,
          default:""
       },
       DateV :{
       type:String,
       default:""
       },
       Period:{
        type:String,
        default:""
        },
    
    })
const Reservation=mongoose.model("reservation",reservationSchema);
module.exports = Reservation;