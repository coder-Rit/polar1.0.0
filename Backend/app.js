const express = require('express')
const glowbaleErrorHandler = require('./middleware/error')
const app = express()
const cors = require('cors')
const companyRouter = require('./router/companyRouter')
const traderRouter = require('./router/traderRouter')
const userRouter = require('./router/userRouter')
const cookieParser = require('cookie-parser');

 


app.use(cors())
app.use(express.json())
app.use(cookieParser());

app.use("/api/v1",userRouter)
app.use("/api/v1",traderRouter)
app.use("/api/v1",companyRouter)
 
app.use(glowbaleErrorHandler)
module.exports = app