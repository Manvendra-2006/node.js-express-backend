import express from 'express'
import path from 'path'
const app = express()
const publicPath = path.resolve("File")
app.use(express.static(publicPath))  // Here , express.static() will load the static file in "File" Folder
app.get("/",(req,resp)=>{
    const absPath = path.resolve("File/Home.html")  // Here path.resolve("absolute file name") convert it into absolute path
    resp.sendFile(absPath) // Because sendFile accepts only Absolute path of the file
})
app.get("/login",(req,resp)=>{
    const absPath = path.resolve("File/login.html")
    resp.sendFile(absPath)
})

app.listen(2300)