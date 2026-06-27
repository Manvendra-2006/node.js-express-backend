import User from "../models/userModel.js"
import crypto from "crypto"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import Session from "../models/sessionModel.js"
import BlackList from "../models/blacklistmodel.js"
import { sendEmail } from "../services/email.js"
import { generateOTP } from "../utlis/utlis.js"
import { getOTP } from "../utlis/utlis.js"
import OTP from "../models/otpModel.js"
export async function RegisterController(req, resp) {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return resp.status(404).json({ message: "Name,Email,Password from these any field is not there" })
        }
        const user = await User.findOne({ email })
        if (user) {
            return resp.status(400).json({ message: "User Already exists" })
        }
        // const hashpassword = await crypto.createHash("sha256").update(password).digest("hex")
        const hashpassword = await bcrypt.hash(password, 10)
        if (!hashpassword) {
            return resp.status(404).json({ message: "Password is not hashed" })
        }
        const newUser = await User.create({
            name,
            email,
            password: hashpassword
        })
        // For OTP , In OTP based authentication refreshtoken and accesstoken is not gnerated during registration
        // const refreshToken = await jwt.sign(
        //     { id: newUser._id },
        //     process.env.JWT_SECRET_KEY,
        //     { expiresIn: '7d' }
        // ) // For OTP , In OTP based authentication refreshtoken and accesstoken is not gnerated during registration
        // const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex")
        // const session = await Session.create({
        //     user:newUser._id,
        //     refreshTokenHash,
        //     ip:req.ip,
        //     userAgent:req.headers["user-agent"]
        // })
        // const accessToken = await jwt.sign(
        //     {
        //         id: newUser._id,
        //         sessionId: session._id
        //     },
        //     process.env.JWT_SECRET_KEY,
        //     { expiresIn: "15m" }
        // )
        // resp.cookie("refreshToken", refreshToken, {
        //     httpOnly: true,
        //     secure: true,
        //     sameSite: "strict",
        //     maxAge: 7 * 24 * 60 * 60 * 1000
        // })
        // For OTP , In OTP based authentication refreshtoken and accesstoken is not gnerated during registration
        const  otp = generateOTP();
        const html = getOTP(otp)
        const otpHash = await bcrypt.hash(otp,10)
        const otpmodel = await OTP.create({
            otpHash,
            email,
            user:newUser._id
        })
        await sendEmail(email,"OTP Verification",`Your OTP code is ${otp}`,html)
        if (newUser) {
            return resp.status(201).json({ message: "New User is created", newUser})
        }
    }
    catch (error) {
        resp.status(505).json({ message: "Internal Server Error", error })
    }
}
export async function loginController(req, resp) {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return resp.status(404).json({ message: "Email and password not found" })
        }
        const isUserExists = await User.findOne({ email })
        if (!isUserExists) {
            return resp.status(400).json({ message: "User is not registered or existed" })
        }
        if(!user.verified){
            return resp.status(400).json({message:"User is not verified"})
        }
        const isPassword = await bcrypt.compare(password, isUserExists.password)
        if (!isPassword) {
            return resp.status(404).json({ message: "Password is not equal means password is wrong" })
        }
        const refreshToken = await jwt.sign(
            {id:isUserExists._id},
            process.env.JWT_SECRET_KEY,
        {expiresIn:"7d"}
        )
        const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex")
        const session = await Session.create({
            user:isUserExists._id,
            ip:req.ip,
            userAgent:req.headers["user-agent"],
            refreshTokenHash
        })
        const accessToken = await jwt.sign(
            {id:isUserExists._id,sessionId:session._id},
            process.env.JWT_SECRET_KEY,
            {expiresIn:"15m"}
        )
        resp.cookie("refreshToken",refreshToken,{
            httpOnly:true,
            sameSite:"strict",
            secure:true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return resp.status(200).json({ message: "Login Successfully", isUserExists,accessToken })
    }
    catch (error) {
        return resp.status(505).json({ message: "Internal Server Error", error })
    }
}

export async function getMeController(req, resp) {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
        const BlackListData = await BlackList.findOne({
            userId:decoded.id,
            accessToken:token
        })
        if(BlackListData){
            return resp.status(400).json({message:"Access Token is invalid"})
        }
        if (!token) {
            return resp.status(404).json({ message: "User is unauthorized" })
        }
        const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (decode) {
            const user = await User.findOne({ _id: decode.id })
            console.log(user)
            return resp.status(201).json({ user })
        }
    }
    catch (error) {
        return resp.status(505).json({ message: "Internal Server Error", error })
    }
}

export async function RefreshTokenController(req, resp) {
    try {
        const refreshToken = req.cookies.refreshToken
        if (!refreshToken) {
            return resp.status(400).json({ message: "UnAuthorized User" })
        }
        const decoded = await jwt.verify(refreshToken, process.env.JWT_SECRET_KEY)      
        const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex")
       const session = await Session.findOne({
        user:decoded.id,
        refreshTokenHash,
        revoked:false
       })
       if(!session){
        return resp.status(401).json({message:"User already logout"})
       }
        const accessToken = await jwt.sign(
            {
                id: decoded.id,
                sessionId: session._id
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '15m' }
        )
       const newrefreshToken = await jwt.sign(
        {id:decoded.id},
        process.env.JWT_SECRET_KEY,
        {expiresIn:"7d"}
       )
        const newrefreshTokenHash = crypto.createHash("sha256").update(newrefreshToken).digest("hex")
        session.refreshTokenHash = newrefreshTokenHash
        await session.save()
        resp.cookie("refreshToken", newrefreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return resp.status(201).json({
            message: "Access Token refreshed successfully",
            accessToken
        })
    }
    catch (error) {
        return resp.status(500).json({ message: "Internal Server Error", error })
    }
}
export async function logoutController(req,resp){ 
    try{
        const refreshToken = req.cookies.refreshToken
        const accessToken = req.headers.authorization?.split(" ")[1]
        if(!accessToken){
            return resp.status(400).json({message:"Access TOken required"})
        }
        if(!refreshToken){
            return resp.status(400).json({message:"Refresh Token not found"})
        }
        const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex")
        const session = await Session.findOne({
            refreshTokenHash,
            revoked:false
        })
        if(!session){
            return resp.status(400).json({message:"Refreshtoken is invalid"})
        }
        session.revoked = true
        await session.save()
        resp.clearCookie("refreshToken")
        const blaklist = await BlackList.create({
            userId:session.user,
            accessToken
        })
        if(blaklist){
        resp.status(200).json({message:"Logged Out Successfully"})
        }
    }
    catch(error){
        return resp.status(500).json
    }
}
export async function LogoutAllController(req,resp){
    try{
        const refreshToken = req.cookies.refreshToken
        if(!refreshToken){
            return resp.status(400).json({message:"Refresh Token not found"})
        }
        const decoded = jwt.verify(refreshToken,process.env.JWT_SECRET_KEY)
        await Session.updateMany({
            user:decoded.id,
            revoked:false
        },{
            revoked:true
        })
        resp.clearCookie("refreshToken")
        return resp.status(200).json({message:"Logout from all devices"})
    }
    catch(error){
        return resp.status(500).json({message:"Internal Server Error",error})
    }
}
export async function verifyEmail(req,resp){
    try{
        const {otp,email} = req.body
        if(!otp||!email){
            return resp.status(400).json({message:"OTP and Email are required"})
        }
        const verify = await OTP.findOne({
            email
        })
        if(!verify){
            return resp.status(404).json({message:"OTP not found"})
        }
        const user = await User.findOne({
            email
        })
        if(!user){
            return resp.status(404).json({message:"user not found"})
        }
        const compareOTP = await bcrypt.compare(otp,verify.otpHash)
        if(compareOTP){
            user.verified = true
            await user.save()
            await OTP.deleteOne({email})
            return resp.status(200).json({message:"OTP is verified"})
        }
        else{
            return resp.status(400).json({
                message:"Invalid OTP"
            })
        }
    }
    catch(error){
        return resp.status(500).json({message:"Internal Server Error",error})
    }
}