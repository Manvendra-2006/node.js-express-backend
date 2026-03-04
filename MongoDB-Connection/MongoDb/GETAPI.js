import { MongoClient } from "mongodb";
import express from 'express'

const app = express()
const URL = "mongodb://localhost:27017"
const dbName = "Login_Data"
const client = new MongoClient(URL)
app.get("/",async (req,resp)=>{
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection('hello')
    const result = await collection.find().toArray()
    resp.send(result)
})
app.listen(1700)
//http://localhost:1700/  This is a get API 