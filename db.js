const mongoose = require('mongoose')

module.exports = ({ MONGO_URI }) => {
    mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('database connected successfully')
    })
    .catch(err =>{
        console.log('could not connect',err.message)
    })
    }