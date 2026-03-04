import { MongoClient, ObjectId } from "mongodb";
import express from 'express'
const app = express()
const URL = "mongodb://localhost:27017"
const dbName = "Login_Data"
const client = new MongoClient(URL)
app.delete("/delete/:id",async (req,resp)=>{
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection('hello')
    const result = await collection.deleteOne({_id: new ObjectId(req.params.id)})
    const results = await collection.find().toArray()
    console.log(results)
    if(results){
        resp.send({message:"Data is Deleted",success:true,data:results})
    }
    else{
        resp.send({message:"Data is not Deleted",success:false})
    }
})
app.listen(1800)