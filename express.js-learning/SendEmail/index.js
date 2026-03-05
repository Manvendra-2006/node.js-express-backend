import nodemailer from 'nodemailer'
import express from 'express'
const app = express()
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"manvendrabhardwaj230@gmail.com",
        pass:"passkey here"
    }
})
app.get("/mail",(req,resp)=>{
    resp.render("mail")
})
app.post("/submit-email",(req,resp)=>{
    const mailOptions = {
        from : "manvendrabhardwaj230@gmail.com",
        to:"manvendrabhardwaj230@gmail.com",
        text:req.body.mail,
        subject:req.body.subject

    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            resp.send("Error occured")
        }
        else{
            resp.send("Email is Submittted")
        }
    })

})
app.listen(7800)