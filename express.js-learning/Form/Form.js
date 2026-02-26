import express from 'express'
import { Home } from './Home.js'
import { Login } from './Login.js'
import { Submit } from './Submit.js'
const app = express()
app.get("/",(req,resp)=>{
    resp.send(Home())
})
app.get("/login",(req,resp)=>{
    resp.send(Login())
})
app.post("/submit",(req,resp)=>{
    resp.send(Submit())
})

app.listen(4500)