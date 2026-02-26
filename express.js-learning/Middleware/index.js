import express from 'express'
const app = express()
function checkOut(req,resp,next){ // This is middleware which containe three parameter req,resp,next 
        console.log("User is accessing",req.url) 
        next(); // It allow to enter a request to its final route 
}
app.use(checkOut)
app.get("/",(req,resp)=>{
    resp.send("Home Page")
})
app.get("/login",(req,resp)=>{
    resp.send("Login Page")
})
app.get("/about",(req,resp)=>{
    resp.send("About Page")
})
app.listen(9800)