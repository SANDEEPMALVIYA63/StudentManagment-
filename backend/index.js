const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 5000;
const adminRoutes = require('./routes/adminRoutes') 
const StudentRoutes = require('./routes/StudentRoutes')
const EnquiryRoutes = require('./routes/enquiryRoutes')
const db = require('./dbConnection')
db ('mongodb://localhost:27017/Student')
const app=express();
app.use (cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// app.use('/api',userRoutes);
app.use('/api',adminRoutes);
app.use('/api',StudentRoutes);
app.use('/api',EnquiryRoutes);


app.listen(PORT,()=>{console.log("server started !❤️‍🔥")});