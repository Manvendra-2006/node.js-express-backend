import express from 'express'
import path from 'path'
const app = express()
// function checkAge(req,resp,next){
//     if(!req.query.age || req.query.age<18){
//             resp.send("Alert! You can not access this page")
//     }    
//     else{
//         next();
//     }
// }
function ipAddress(req,resp,next){  // IP MiddleWare 
    const ip = req.socket.remoteAddress // ye url se ip address ko get krega
    console.log(ip)
    if(ip.includes('10.26.76.100')){ // ip.includes ka meaning apko ye ip address yadi aaye toh send alert
        resp.send("Alert!")
    }
    else{
        next();
    } 
}
app.use(ipAddress)
app.get("/",(req,resp)=>{
    resp.send("<h1>Home Page</h1>")
})
app.get("/user",(req,resp)=>{
    resp.send("User Page")
})
app.get("/product",(req,resp)=>{
    resp.send("Product Page")
})
app.listen(8700)