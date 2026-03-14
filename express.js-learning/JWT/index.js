import express from 'express'
import bcrypt from 'bcryptjs'
import { MongoClient } from 'mongodb'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dotenv.config()
app.set("view engine", "ejs")
app.get("/login", (req, resp) => {
    resp.render('login')
})
const dbName = "WebsiteData"
const URL = "mongodb://localhost:27017"
const client = new MongoClient(URL)
app.post("/auth/login", async (req, resp) => {
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection('users')
    const { email, password } = req.body
    const user = await collection.findOne({ email })
    if (!user) {
        return resp.status(400).json({ message: "User is not exist" })
    }
    const password1 = await bcrypt.compare(password, user.password)
    if (!password1) {
        return resp.status(400).json({ message: "User is not exist" })
    }
    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_TOKEN,
        { expiresIn: "7d" }
    )
    resp.json(
        {
            message: "User Logged IN Successfully",
            token
        }
    )
})
app.listen(7800)