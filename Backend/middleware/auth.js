// const jwt = require("jsonwebtoken");
// const userModel = require("../models/userModel");
// const { cathcsyncError } = require("../utils/cathcsyncError");
// const ErrorHandler = require("../utils/ErrorHandler");



// exports.isAutherizedUser = cathcsyncError(async (req, res, next) => {
//     const { Token } = req.cookies 

//     console.log("tokennn",req.cookies);

//     if (!Token) {
//         return next(new ErrorHandler("Please Login to access this resource", 401));
//       }

//     const decodeadId = jwt.verify(Token, process.env.JWT_SECRET) 
//     req.user = await userModel.findById(decodeadId.id)

//     next() 

// }) 


 
