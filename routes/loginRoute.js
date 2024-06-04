const express = require("express")
const userRoute = express()
const loginControl = require("../controller/loginController")

userRoute.get("/", loginControl.renderLogin)

module.exports = userRoute