const student = require('../model/studentModel')
const addStudent = (req,res)=>{

    console.log("this is add Student ")
    res.send("this is Student Panal ")

}

module.exports = {addStudent}