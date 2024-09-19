const  express = require('express')
const router = express.Router();
const {addStudent}= require('../controller/StrudentController.js')

router.route('/addStudent').post(addStudent)

module.exports = router;