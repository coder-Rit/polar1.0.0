const ErrorHandler = require("../utils/ErrorHandler")
const treadModel = require("../models/treadModel");
const { cathcsyncError } = require("../utils/cathcsyncError");


//buyung and updating stocks
exports.setStock = cathcsyncError(async (req, res, next) => {
   
    const {companyName,Stocks}= req.body

    let stock = await treadModel.findOne({companyName})   


    if(!stock){
       await treadModel.create(req.body).then((data)=>{
        res.status(200).json({
            success: true,
            data
        }) 
    
       })
        

    }  
    console.log("stockes are here",Stocks)

    stock.Stocks.push(Stocks[0]) 
    await stock.save() 

    res.status(200).json({
        success: true,
        stock
    })

})


//getting all stocks
exports.Stock = cathcsyncError(async (req, res, next) => { 
    const stock = await treadModel.find() 

    res.status(200).json({
        success: true,
        stock
    })

})

//solding of stocks 
exports.sellStock = cathcsyncError(async (req, res, next) => {  
    let stock = await treadModel.find() 

    if (!stock) { 
        return next(new ErrorHandler("Your are not holding any stock of this company",404)) 
    }

    

    res.status(200).json({
        success: true,
        stock
    })

})
 