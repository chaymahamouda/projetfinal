const mongoose = require("mongoose");


const voyageShema = new mongoose.Schema({
    url:String,
    name: String,
   duree:String,
   description:String,
    categorie: String,
    prix: String,
});
const Voyage=mongoose.model("voyage",voyageShema);
module.exports = Voyage;