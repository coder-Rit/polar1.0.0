const express = require('express') 
const { setStock , sellStock } = require('../controller/tradeController')
 const Router = express.Router()
 

Router.route("/setStock").put(setStock)
Router.route("/sellStock").delete(sellStock)
 
 
module.exports = Router
