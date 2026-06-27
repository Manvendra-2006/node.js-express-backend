import express from 'express'
import {getMeController, loginController, LogoutAllController, logoutController, RefreshTokenController, RegisterController, verifyEmail} from '../controllers/authControllers.js'
const authRouter = express.Router()
authRouter.post("/register",RegisterController)
authRouter.post("/login",loginController)
authRouter.get("/get-me",getMeController)
authRouter.get("/refresh-token",RefreshTokenController)
authRouter.get("/logout",logoutController)
authRouter.get("logout-all",LogoutAllController)
authRouter.post("/otp",verifyEmail)
export default authRouter