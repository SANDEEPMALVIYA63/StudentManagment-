const mongoose= require('mongoose')

async function db(URL){
    return await mongoose.connect (URL)
}
module.exports =db;
