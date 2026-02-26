import express from 'express'
import morgan from 'morgan'
const app = express()
app.use(morgan('dev'))  // It give the record of HTTP request 
app.get("/",(req,resp)=>{
    resp.send("home page")
})
app.get("/login",(req,resp)=>{
    resp.send("Login Pagge")
})
app.listen(1900)

// morgan('dev)  is logging middleware which print the record of  HTTP request 
// Answer logs in developer friendly short format main show kro