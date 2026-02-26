import express from 'express'
const app = express()
app.set("view engine","ejs")
app.get("/",(req,resp)=>{
    resp.render("Home",{name:"manvendra",classes:"12",subject:"maths"})  // Here , when we use ejs we want to render a html file and data is also send from server 
})
app.listen(1200)