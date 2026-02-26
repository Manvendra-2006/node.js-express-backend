import express from 'express'
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.static("folder name")) // It load static file in project
app.get("/",(req,resp)=>{
    resp.send(`
           <form action="/submit" method="post"> 
        <label>Name</label>
        <input type="text" placeholder="Enter Name" name="name"/>
        <br/>
        <br/>
        <label>Class</label>
        <input type="number" placeholder="Enter class" name="class"/>
        <br/>
        <br/><label>Subject</label>
        <input type="text" placeholder="Enter subject" name="subject"/>
        <br/>
        <br/>
        <button>Submit</button>
        </form>
        `)
})
app.post("/submit",(req,resp)=>{
    console.log(req.body)
    console.log(JSON.stringify(req.body))
    resp.send("Data is submitted"+JSON.stringify(req.body))  // resp.send() takes only one argument
})
app.listen(1200)