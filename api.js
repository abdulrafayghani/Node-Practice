const User = require('./models/User') 

const signUpApi = async (req, res) => {
    const { name, lastName, userName, password} = req.body
    
    try{
        const newUser = await new User({
            name,
            lastName,
            userName,
            password
        }).save()
        
        res.send({success: true, user: newUser})
    }
    catch(err){
        res.status(500).send({ success: false, message: err.message })
    }
}

const loginApi = async (req, res) => {
    const {userName, password} = req.body

    try{
        const findUser = await User.find({userName, password})

       if(!findUser){
        return res.status(404).send('user not found')
        }
        res.send(findUser)
    }
    catch(err){
        res.status(500).send('server error, please try again')
    }
}

module.exports = {
    signUpApi,
    loginApi
}