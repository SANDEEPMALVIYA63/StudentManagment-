const express = require('express')
const router = express.Router()
const {addEnquiry} = require('../controller/enquiryController')



router.route('/enquiry').post(addEnquiry)
module.exports = router 