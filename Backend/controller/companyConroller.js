const companyModel = require("../models/companyModel");
const { cathcsyncError } = require("../utils/cathcsyncError");

 exports.createCompany = cathcsyncError(async(req,res,next)=>{ 
     const comp = await companyModel.create(req.body) 
   
     res.status(200).json({
         success:true,
         comp
     })
 })
 exports.getCompanies = cathcsyncError(async(req,res,next)=>{
     let stock = await companyModel.find() 

     res.status(200).json({
        success:true,
        stock
    })
 })