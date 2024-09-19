const enquiryModel = require('../model/enquiryModel')



 async function addEnquiry(req,res){
  const {name,email,phoneNumber,clgName,course,qualification} = req.body
  console.log(name,email,phoneNumber, clgName,course,qualification)
  try {

      {
     const  data =  await enquiryModel.create({
      name:name,
      email:email,
      phoneNumber:phoneNumber,
      clgName:clgName,
      course:course,
      qualification:qualification,

     })
     res.status(201).send({msg:"enquriy add" , data:data})
  }
  
    // res.status(201).send({msg:"enquriy add" , data:{name,email}})
  
  } catch (error) {
    res.status(400).send({ msg: "somthing went wrong!", error: error });
  }


}
module.exports = {addEnquiry}