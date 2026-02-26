import express from 'express'
import path from 'path'
const app = express()
app.get("/",(req,resp)=>{
    const absPath = path.resolve("File/Home.html")  // Here path.resolve("absolute file name") convert it into absolute path
    resp.sendFile(absPath) // Because sendFile accepts only Absolute path of the file
})
app.get("/login",(req,resp)=>{
    const absPath = path.resolve("File/login.html")
    resp.sendFile(absPath)
})
app.listen(7800)

// This is a method to render a html file in express.js 