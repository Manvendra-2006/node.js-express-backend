// Route MiddleWare means a middleware which apply on specific route is known as route middleware
// Route Middleware main app.use() ka use nhi hota hain in this we give the function name in second parameters
import express from 'express'
const app = express()
function checkAge(req,resp,next){
    if(!req.query.age || req.query.age<18){ // re.query is a query parameter which is after ? on url
        resp.send("Alert ! You can not access this page")
    }
    else{
        next()
    }
}
function checkURL(req,resp,next){
    console.log("URL is ",req.url)
    next()
}
app.get("/",(req,resp)=>{
    resp.send("<h1>Home Page</h1>")
})
app.get("/product", checkAge,(req,resp)=>{
    resp.send("<h1>product Page</h1>")
})
app.get("/login", checkAge,checkURL,(req,resp)=>{  // Multiple middleware in single request 
    resp.send("<h1>login Page</h1>")
})
app.get("/about",checkURL,(req,resp)=>{
    resp.send("<h1>About Page</h1>")
})
app.listen(8900)