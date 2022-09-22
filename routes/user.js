const express=require("express");
const router = express.Router();
const bcrypt=require("bcrypt");
const User=require("../models/User");
const jwt =require("jsonwebtoken");
const {loginRules,registerRules,validation}= require("../middleware/validator");
const isAuth=require("../middleware/passport");
//router.get("/",(req,res)=>{
//    res.send("hello world");
//});
//get all users
router.get("/", async (req, res)=>{
    try {
     
        const result=await User.find();
        res.status(200).send({user:result,msg:"tous les usres "});  
    } catch (error) {
        console.log(error);
        
    }
    });


//register
router.post("/register",registerRules(),validation, async(req,res)=>{
    const{ name, lastName, email, password,telephone,adress,categorie}=req.body;
    try {
        const newUser= new User({name,lastName,email,password});
//check if the email exist 
 const searchedUser= await User.findOne({email})

if(searchedUser){
    return res.status(400).send({msg:"email already exist"})
}

    //hash password
    const salt= 10;
    const genSalt =await bcrypt.genSalt(salt);
    const hashedPassword= await bcrypt.hash(password,genSalt);
    console.log(hashedPassword);
    newUser.password = hashedPassword;
    //generate a token
   

      // save the user 
const newUserToken=await newUser.save();
const payload={
    _id:newUserToken._id,
    name:newUserToken.name, 
 }
 const token=await jwt.sign(payload, process.env.SecretOrkey,{
     expiresIn: 3600,
 });
res.status(200).send({newUserToken,msg:"user is saved",token:`Bearer ${token}`})
    } catch (error) {
        res.status(500).send("can not save the user");   
    }
})
//login
router.post("/login",loginRules(),validation, async(req,res)=>{
    const {email,password}=req.body;
try {
    // find if the user exist 
const searchedUser= await User.findOne({email}); 
    // if the email not exist 
   if(!searchedUser){
    return res.status(400).send({msg:"bad credential"})
   } 
     // password are equals
     const match=await bcrypt.compare(password,searchedUser.password); 
     
     if(!match){
        return res.status(400).send({msg:"bad credential"});   
     }
// create token 
const payload={
    _id:searchedUser._id,
    name: searchedUser.name,
};
const token=await jwt.sign(payload, process.env.SecretOrkey,{
    expiresIn: 3600,
});
     //send the user
     res.status(200).send({user:searchedUser,msg:"sucess",token:`Bearer ${token}`});
} catch (error) {
    console.log(error)
   res.status(500).send({msg:"can not get the user"}); 
}
});


router.get ("/current", isAuth(), (req,res)=> {
    //console.log(req)
   res.status(200).send({user:req.user});

});

router.put("/:id", async (req, res)=>{
    try {
     
        const result=await User.findByIdAndUpdate({_id:req.params.id},{ $set: { ...req.body}});
        res.status(200).send({msg:"user updated "});  
    } catch (error) {
        console.log(error);
        
    }
    });
    router.delete("/:id", async (req, res)=>{
        try {
         
            const result=await User.findByIdAndDelete({_id:req.params.id});
            res.status(200).send({msg:"user deleted "});  
        } catch (error) {
            console.log(error);
            
        }
        });

module.exports= router;
