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
// 404 Page
app.use((req,resp)=>{
    const absPath = path.resolve("File/404.html")
    resp.status(404).sendFile(absPath)
})
app.listen(6700)