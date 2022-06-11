const req = require("express/lib/request");

 

exports.cookieMaker = (res,user,statuscode)=>{

    const Token = user.gwtJWT() 
     const Options ={
        expire:new Date(
            Date.now() + process.env.COOKIEEXPIREEIN *24*60*60*1000
        ),httpOnly:true
    }

   
    console.log("cookie",req.cookies); 
    res.status(statuscode).cookie("Token",Token,Options).json({
        Token
    }) 
}

