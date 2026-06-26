import User from "../models/userModel.js"
import crypto from "crypto"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import Session from "../models/sessionModel.js"
export  async  function RegisterController(req,resp){
    try{
        const {name,email,password} = req.body
        if(!name||!email||!password){
           return  resp.status(404).json({message:"Name,Email,Password from these any field is not there"})
        }
        const user = await User.findOne({email})
        if(user){
            return resp.status(400).json({message:"User Already exists"})
        }
        // const hashpassword = await crypto.createHash("sha256").update(password).digest("hex")
        const hashpassword = await bcrypt.hash(password,10)
        if(!hashpassword){
          return  resp.status(404).json({message:"Password is not hashed"})
        }        
        const newUser = await User.create({
            name,
            email,
            password:hashpassword
        })
         const refreshToken = await jwt.sign(
            {id:newUser._id},
            process.env.JWT_SECRET_KEY,
            {expiresIn:'7d'}
        )
        const refreshTOkenHash = await bcrypt.hash(password,10)
        const session = await Session.create({
            user:newUser._id,
            refreshTOkenHash,
            ip:req.ip,
            userAgent:req.headers["user-agent"]
        })
        const accessToken = await jwt.sign(
            {id:newUser._id,
                sessionId:session._id
            },
            process.env.JWT_SECRET_KEY,
            {expiresIn:"15m"}
        )
       
        resp.cookie("refreshToken",refreshToken,{
            httpOnly:true,
            secure:true,
            sameSite:"strict",
            maxAge: 7* 24 * 60 * 60 * 1000
        })
        if(newUser){
            return resp.status(201).json({message:"New User is created",newUser,accessToken})
        }
    }
    catch(error){
        resp.status(505).json({message:"Internal Server Error",error})
    }
}
export async function loginController(req,resp){
    try{
        const {email,password} = req.body
        if(!email||!password){
            return resp.status(404).json({message:"Email and password not found"})
        }
        const isUserExists = await User.findOne({email})
        if(!isUserExists){
            return resp.status(400).json({message:"User is not registered or existed"})
        }
        const isPassword = await bcrypt.compare(password,isUserExists.password)
        if(!isPassword){
            return resp.status(404).json({message:"Password is not equal means password is wrong"})
        }
        return resp.status(200).json({message:"Login Successfully",isUserExists})
    }
    catch(error){
        return resp.status(505).json({message:"Internal Server Error",error})
    }
}

export async function getMeController(req,resp){
    try{
       const token = req.headers.authorization?.split(" ")[1]
       if(!token){
        return resp.status(404).json({message:"User is unauthorized"})
       }
       const decode = await jwt.verify(token,process.env.JWT_SECRET_KEY)
       if(decode){
        const user = await User.findOne({_id:decode.id})
        console.log(user)
        return resp.status(201).json({user})
       }
    }
    catch(error){
        return resp.status(505).json({message:"Internal Server Error",error})
    }
}

export async function RefreshTokenController(req,resp){
    try{
        const refreshToken = req.cookies.refreshToken
        if(!refreshToken){
            return resp.status(400).json({message:"UnAuthorized User"})
        }
        const decoded = await jwt.verify(refreshToken,process.env.JWT_SECRET_KEY)
        const accessToken = await jwt.sign(
            {id:decoded.id,
                sessionId:session._id
            },
            process.env.JWT_SECRET_KEY,
            {expiresIn:'15m'}
        )
        const refreshToken = await jwt.sign(

            {id:decoded.id},
            process.env.JWT_SECRET_KEY,
            {expiresIn:'7d'}
        )
        resp.cookie("refreshToken",refreshToken,{
            httpOnly:true,
            secure:true,
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })
        return resp.status(201).json({
            message:"Access Token refreshed successfully",
            accessToken
        })
    }
    catch(error){
        return resp.status(500).json({message:"Internal Server Error",error})
    }
}