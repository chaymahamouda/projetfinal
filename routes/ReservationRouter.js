const express = require ("express");
const Reservation = require("../models/Reservation");
const ReservationRouter = express.Router();


 ReservationRouter.post("/add", async (req, res)=>{
try {
 
    const newReservation =new Reservation(req.body);
    const result=await newReservation.save();
    res.status(200).send({reservation:result,msg:"reservation added succsesfully "});  
} catch (error) {
    console.log(error);
    
}
}); 

ReservationRouter.get("/", async (req, res)=>{
    try {
     
        const result=await Reservation.find();
        res.status(200).send({reservation:result,msg:"tous les reservations "});  
    } catch (error) {
        console.log(error);
        
    }
    });

    ReservationRouter.get("/:id", async (req, res)=>{
        try {
         
            const result=await Reservation.findById({_id:req.params.id});
            res.status(200).send({reservation:result,msg:"chercher une reservation "});  
        } catch (error) {
            console.log(error);
            
        }
        });

         ReservationRouter.put("/:id", async (req, res)=>{
            try {
             
                const result=await Voyage.findByIdAndUpdate({_id:req.params.id},{ $set: { ...req.body}});
                res.status(200).send({msg:"reservation updated "});  
            } catch (error) {
                console.log(error);
                
            }
            }); 

            
        ReservationRouter.delete("/:id", async (req, res)=>{
            try {
             
                const result=await Reservation.findByIdAndDelete({_id:req.params.id});
                res.status(200).send({msg:"reservation deleted "});  
            } catch (error) {
                console.log(error);
                
            }
            });




module.exports = ReservationRouter;