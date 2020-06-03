const PORT = process.env.PORT || 3001
const config = require('./config')

require('./db')({MONGO_URI: config.MONGO_URI})
require('./server')({
    port: PORT,
    cb: () => console.log('server is running on port 3001')
})
