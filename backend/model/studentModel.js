const mongoose = require('mongoose')

const  studentSchema = new mongoose.Schema({
  
    name:{
       type:String, 
       require :true ,
    },
    email:{
        type:String, 
        require :true,
     },
     contacte:{
        type:String, 
        require :true,
     },
     addresh:{
        type:String, 
        require :true,
     },
})
studentModel = new  mongoose.model('Student', studentSchema)
module.exports = studentModel