import express from 'express'
import path from 'path'
const app = express()
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.get("/login",(req,resp)=>{
    const absPath = path.resolve("views/Login.html")
    resp.sendFile(absPath)
})
app.post("/submit",(req,resp)=>{
    
    resp.render("submit",req.body)
})
app.listen(7800)