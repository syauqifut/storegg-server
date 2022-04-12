const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    serviceName : process.env.SERVICENAME,
    urlDb : process.env.MONGODB_URL,
}