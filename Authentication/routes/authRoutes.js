import express from 'express'
import {getMeController, loginController, RefreshTokenController, RegisterController} from '../controllers/authControllers.js'
const authRouter = express.Router()
authRouter.post("/register",RegisterController)
authRouter.post("/login",loginController)
authRouter.get("/get-me",getMeController)
authRouter.get("/refresh-token",RefreshTokenController)
export default authRouter