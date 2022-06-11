const express = require('express') 
const { registerUser, loginUser } = require('../controller/userController')
 const Router = express.Router()
 

Router.route("/registerUser").post(registerUser)
Router.route("/loginUser").get(loginUser)
  
 
module.exports = Router 