import express from 'express'
import { Controller } from './Controller/userController.js'
const app = express()
app.set("view engine","ejs")
app.get("/",Controller)  // Here , we do not call Controller because we express wants refrence not value
app.listen(8700)


