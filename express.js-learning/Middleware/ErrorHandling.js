import express from 'express'
const app = express()
app.get("/",(req,resp)=>{
    resp.send("Home Page")
})
app.get("/error",(req,resp,next)=>{
    const error = new Error;
    error.status = 500;
    next(error)
})
function middleware(error,req,resp,next){
    resp.status(error.status || 500).send("Internal Server error")
}
app.use(middleware)
app.listen(1800)