const  express = require('express')
const router = express.Router();
const {adminLogin , adminSignup} = require('../controller/adminController')

router.route('/adminLogin').post(adminLogin)
// router.route('/adminSignup').post(adminSignup)

module.exports = router;