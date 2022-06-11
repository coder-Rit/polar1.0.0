const mongoose = require('mongoose')
 
const traderSchema = new mongoose.Schema({
    companyName: String,
    Stocks:[
        {
            value:{
                type:"Number",
                required:true
            },
            quantity:{
                type:"Number",
                required:true
            },
            Time:{
                type:Number,
                required:true
            } 

        }
        
        
        
    ]
})

module.exports = mongoose.model('trade',traderSchema)