import { MongoClient, ObjectId } from "mongodb";
import express from 'express'
const app = express()
app.use(express.json())
const URL = "mongodb://localhost:27017"
const dbName = "Login_Data"
const client = new MongoClient(URL)
await client.connect()
app.put("/Edit/:id",async (req,resp)=>{
    const db = client.db(dbName)
    const collection = db.collection('hello')
    const result = await collection.updateOne({_id: new ObjectId(req.params.id)},{$set:req.body})
    const results = await collection.find().toArray()
    resp.send({message:"Data is Updated",success:true,data:result})
})
app.listen(1700)