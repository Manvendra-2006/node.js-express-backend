import express from 'express'
const app = express()
app.set("view engine","ejs") // In this we set Template engine "ejs"
app.get("/",(req,resp)=>{
    resp.render("array",{array:["manas","manvendra","anil","sidhu"]})
})
app.listen(7800)