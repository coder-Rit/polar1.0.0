const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        max: ['name should be maximum 30 character', 30],
        max: ['name should be mininmum 3 character', 3]
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        select: false
    }

})

//converting password into hash
userSchema.pre("save", async function () {
    if (!this.isModified('password')) {
        next()
    }

    this.password = await bcrypt.hash(this.password, 10)

})

//genratong jwt token
userSchema.methods.gwtJWT = async function () {
    
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.EXPIREIN
    })
}

//compaireing passowrd
userSchema.methods.comparePass = async function (enterdPassword, savedPassword) {
     return await bcrypt.compare(enterdPassword, savedPassword)
}

module.exports = mongoose.model('user', userSchema)

