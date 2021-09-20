const express = require('express')
const Routes = express.Router()

const User = require('./Routes/user')
const Config = require('./Config/global')

Routes.get('/', (req, res) => {
    return res.send({
        data: Config.name + " Rest API Template"
    })
})

Routes.use('/user', User)

module.exports = Routes