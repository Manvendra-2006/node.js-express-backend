import express from 'express'
const app = express() 
// This code run when route "/" is come for get request
app.get("/",(req,resp)=>{
    resp.send("Data is Submitted")
})
app.listen(8900)