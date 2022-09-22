const express = require ("express");
const VoyageRouter = express.Router();
const Voyage = require("../models/Voyage");

VoyageRouter.post("/add", async (req, res)=>{
try {
 
    const newVoyage =new Voyage(req.body);
    const result=await newVoyage.save();
    res.status(200).send({voyage:result,msg:"voyage added succsesfully "});  
} catch (error) {
    console.log(error);
    
}
});

VoyageRouter.get("/", async (req, res)=>{
    try {
     
        const result=await Voyage.find();
        res.status(200).send({voyage:result,msg:"tous les voyages "});  
    } catch (error) {
        console.log(error);
        
    }
    });

    VoyageRouter.get("/:id", async (req, res)=>{
        try {
         
            const result=await Voyage.findById({_id:req.params.id});
            res.status(200).send({voyage:result,msg:"chercher un voyage "});  
        } catch (error) {
            console.log(error);
            
        }
        });

        VoyageRouter.put("/:id", async (req, res)=>{
            try {
             
                const result=await Voyage.findByIdAndUpdate({_id:req.params.id},{ $set: { ...req.body}});
                res.status(200).send({msg:"voyage updated "});  
            } catch (error) {
                console.log(error);
                
            }
            });

            
        VoyageRouter.delete("/:id", async (req, res)=>{
            try {
             
                const result=await Voyage.findByIdAndDelete({_id:req.params.id});
                res.status(200).send({msg:"voyage deleted "});  
            } catch (error) {
                console.log(error);
                
            }
            });




module.exports = VoyageRouter;