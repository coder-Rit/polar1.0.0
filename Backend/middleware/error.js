 



 const glowbaleErrorHandler = (err,req,res,next)=>{
     console.log(err);
     err.statusCode =  err.statusCode || 500
     err.message =  err.message || "Internal server Error"

console.log("sdf");
     res.status(err.statusCode).json({
        msg : err.stack
     })

 } 
 
 module.exports =glowbaleErrorHandler  