const validator = require('validator')

const firstMiddleware = (req, res, next) => {
    if (!validator.default.isEmail(req.body.email)){
        return res.send('Incorrect email')
    }
    next()
}

module.exports = {
    firstMiddleware
}
