import express from 'express'
import path from 'path'
import { MongoClient, ObjectId } from 'mongodb'
const dbName = 'TaskInfo'
const URL = "mongodb://localhost:27017"
const client = new MongoClient(URL)
await client.connect()
const app = express()
const absPath = path.resolve('public')
app.use(express.static(absPath))
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
app.post("/multi-delete",async (req,resp)=>{
    const db = client.db(dbName)
    const collection = db.collection('to-do')
    console.log(req.body.selectedtask)
    let selectedtask = undefined;
    if(Array.isArray(req.body.selectedtask)){
selectedtask = req.body.selectedtask.map((id)=> new ObjectId(id))
    }
    else{
        selectedtask = [new ObjectId(req.body.selectedtask)]
    }
    const result = await collection.deleteMany({_id : {$in:selectedtask}}) // $in operator takes only array 
    if(result){
        resp.redirect("/")
    }
    else{
        resp.send("error")
    }
})
app.listen(1300)