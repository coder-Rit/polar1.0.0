  const userModel = require("../models/userModel")
const { cathcsyncError } = require("../utils/cathcsyncError")
const { cookieMaker } = require("../utils/cookieMaker")
const ErrorHandler = require("../utils/ErrorHandler")



//register user
exports.registerUser =  cathcsyncError (async (req,res,next)=>{  
      const user = await userModel.create(req.body)  
      
      cookieMaker(res,user,200) 
})

//login user
exports.loginUser =  cathcsyncError (async (req,res,next)=>{  
   const user = await userModel.findOne({email:req.body.email}).select("+password") 
       
       if (!user) {
        
        return next( new ErrorHandler("invalied email or password",401))
      }

      const isAuthenticated = await user.comparePass(req.body.password,user.password)

       if (!isAuthenticated) {
        return next( new ErrorHandler("invalied email or password",404)) 

      } 
       cookieMaker(res,user,201) 
})