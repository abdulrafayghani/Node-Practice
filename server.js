const express = require('express')
const app = express()
const api = require('./api')
// const middleware = require('./middleware')

app.use(express.json())

app.post(
    '/signup',
    // middleware.firstMiddleware,
    api.signUpApi
)

app.post(
    '/login',
    api.loginApi
)

module.exports = ({port, cb}) =>{
    app.listen(port,cb)
}

