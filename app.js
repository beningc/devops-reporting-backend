const express = require('express')

const Routes = require('./src/main')

const Server = express()
const Cors = require('cors')
const port = 3030

Server.use(Cors())

Server.use("/api", Routes)

Server.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});