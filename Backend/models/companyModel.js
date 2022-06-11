const mongoose = require('mongoose') 

const companySchema = new mongoose.Schema({

    companyName:{
        type:"string",
        required:true
    }
})
module.exports = mongoose.model('company',companySchema)