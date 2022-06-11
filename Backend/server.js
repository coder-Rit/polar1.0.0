const app = require('./app')
const dotenv = require('dotenv')
const ConnectToMOngose = require('./config/dataBase')

dotenv.config({path:"Backend/config/config.env"})

ConnectToMOngose()

app.listen(process.env.PORT,()=>{
    console.log(`your server is runing at ${process.env.PORT}`);
}) 