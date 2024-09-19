const admin= require("../model/adminModel");


 const  adminLogin =  async(req, res)=> {
  const {email, password } = req.body;
  console.log(email ,password);
  const result = await admin.findOne({ email: email , password:password });
  try {
    console.log(result);
    if (result) {
      res
        .status(200)
        .send({
          msg: "Admin login successfully",
          data: [ "id",result._id,"Name", result.name, "email" ,result.email],
        });
    } else {
      res.status(400).send({ msg: " admin not found " });
    }
  } catch (error) {
    res.status(400).send({ mag: "somthong went wrong  ", error: error });
  }
}

const adminSignup = async (req, res) => {
  console.log("Signup page ");

  const { name, email, contacte, address,  password, confirmPass } = req.body;

  try {
    
    
    if (password === confirmPass) {
      //    const hashedPassword= await hashedPass(password);
      //   console.log(hashedPassword);
      const data = await admin.create({
        name: name,
        contacte: contacte,
        email: email,
        address: address,
        password: password,
      });
      res.status(201).send({ msg: "user Added ", data: { name, email } });
      //   console.log(data);
    } else {
      res.status(400).send({ msg: "Wrong Password ! ", data: {} });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "somthing went wrong!", error: error });
  }
};
module.exports = { adminLogin , adminSignup };