import express from 'express'
import signupuser from '../controllers/authControllers.js'
const router = express.Router()
router.post("/signup",signupuser)
export default router