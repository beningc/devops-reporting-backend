const express = require('express')
const Routes = express.Router()

const User = require('./Routes/user')

Routes.get('/', (req, res) => {
    return res.send({
        data: "Nodejs Rest API Template"
    })
})

Routes.use('/user', User)

module.exports = Routes