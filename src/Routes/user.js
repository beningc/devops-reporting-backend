const express = require("express")
const Route = express.Router()

const UserCtr = require("../Controller/user")

Route.get("/", UserCtr.get)

module.exports = Route
