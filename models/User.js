const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        default: '',
        trim: true,
        required: true   
    },

    lastName:{
        type: String,
        default: '',
        trim: true,
        required: true   
    },

    userName: {
        type: String,
        default: '',
        trim: true,
        required: true,
        unique: true 
    },

    password: {
        type: String,
        trim: true,
        required: true,   
    }
})

const user = mongoose.model('USER', userSchema)

module.exports = user