import { MongoClient, ObjectId } from "mongodb";
import express from 'express'
const app = express()
const URL = "mongodb://localhost:27017"
const dbName = "Login_Data"
const client = new MongoClient(URL)
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.json())
  await client.connect()
app.get("/",async (req,resp)=>{
    const db = client.db(dbName)
    const collection = db.collection('hello')
    const result = await collection.find().toArray()
    resp.render("home",{Data:result})
})
app.get("/delete-student/:id",async (req,resp)=>{
    const db = client.db(dbName)
    const collection = db.collection('hello')
    const result = await collection.deleteOne({_id : new ObjectId(req.params.id)})
    const results = await collection.find().toArray()
    resp.send("Data is deleted")
})
app.get("/edit-student/:id",async (req,resp)=>{
    const db = client.db(dbName)
    const collection = db.collection('hello')
    const result = await collection.findOne({_id: new ObjectId(req.params.id)})
    resp.render("update",{Data:result})
})
app.post("/student-edit/:id",async(req,resp)=>{ // Here , the post api where data comes from form and updated in database
    const db = client.db(dbName)
    const collection = db.collection('hello')
    const result = await collection.updateOne({_id:new ObjectId(req.params.id)},{$set:req.body})
    resp.send("Data is Edited")
})
app.listen(1200)