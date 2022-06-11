const mongoose = require('mongoose')
const ConnectToMOngose = () => {
    mongoose.connect(process.env.CONNECTION_STRING, { useUnifiedTopology: true, useNewUrlParser: true  }).then((data) => {
        console.log(`your server i hosted on ${data.connection.host}`)
    }).catch(err => console.log(err))
}
 
module.exports = ConnectToMOngose

   