const express = require('express')
const { createCompany, getCompanies } = require('../controller/companyConroller')
const Router = express.Router()
 

Router.route("/registerCompany").post(createCompany)
Router.route("/companies").get(getCompanies)
module.exports = Router






















