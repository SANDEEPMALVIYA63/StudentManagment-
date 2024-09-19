const mongoose = require('mongoose')

const adminShema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true, 
    },
    contacte:{
        type:String,
        require:true,  
    },
    address:{
        type:String,
        require:true,  
    },
    password:{
        type:String,
        require:true,
        
    },
})
 adminModel = new mongoose.model("admins",adminShema);
 module.exports = adminModel;
