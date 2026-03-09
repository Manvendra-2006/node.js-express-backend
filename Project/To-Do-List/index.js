import express from 'express'
import { MongoClient, ObjectId } from 'mongodb'
const dbName = 'TaskInfo'
const URL = "mongodb://localhost:27017"
const client = new MongoClient(URL)
await client.connect()
const app = express()
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.get("/",async (req,resp)=>{
    const db = client.db(dbName)
    const collection = db.collection('to-do')
    const result = await collection.find().toArray()
    resp.render("list",{data:result})
})
app.get("/add",(req,resp)=>{
    resp.render("addTask")
})
app.post("/add",async (req,resp)=>{
        const db = client.db(dbName)
        const collection = db.collection('to-do')
        const result = await collection.insertOne(req.body)
        if(result){
            resp.redirect("/")
        }
        else{
            resp.send("error")
        }
})
app.get("/delete/:id",async(req,resp)=>{
      const db = client.db(dbName)
        const collection = db.collection('to-do')
        const result = await collection.deleteOne({_id: new ObjectId(req.params.id)})
        if(result){
            resp.redirect("/")
        }
        else{
            resp.send("Error")
        }
})
app.get("/edit/:id",async (req,resp)=>{
          const db = client.db(dbName)
        const collection = db.collection('to-do')
        const result = await collection.findOne({_id: new ObjectId(req.params.id)})
        if(result){
            resp.render("update",{data:result})
        }
        else{
            resp.send("Error")
        }
})
app.post("/update/:id",async (req,resp)=>{
      const db = client.db(dbName)
        const collection = db.collection('to-do')
        const result = await collection.updateOne({_id: new ObjectId(req.params.id)},{$set:req.body})
        if(result){
            resp.redirect("/")
        }
        else{
            resp.send("Error")
        }
})
app.listen(1300)