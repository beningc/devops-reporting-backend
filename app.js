const express = require('express')

const Routes = require('./src/main')
const Config = require('./src/Config/global')

const Server = express()
const Cors = require('cors')
const port = Config.port

Server.use(Cors())

Server.use("/api", Routes)

Server.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});