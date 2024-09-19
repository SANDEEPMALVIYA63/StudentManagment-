const mongoose = require("mongoose");

const enquriySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  clgName: {
    type: String,
    require: true,
  },
  course: {
    type: String,
    require: true,
  },
  qualification: {
    type: String,
    require: true,
  },
});

const enquiryModel = new mongoose.model("enquiry", enquriySchema);
module.exports = enquiryModel;
