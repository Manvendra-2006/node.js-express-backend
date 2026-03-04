import { MongoClient } from "mongodb";
import express from 'express'
const app = express()
const URL = "mongodb://localhost:27017"
const dbName = 'Login_Data'
const client = new MongoClient(URL)
//app.use(express.urlencoded({extended:true}))
app.use(express.json())  // This middleware convert json data into parase 
app.post("/student-data", async (req, resp) => {
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection('hello')
    const result = await collection.insertOne(req.body)
    const results = await collection.find().toArray()
    resp.send({ message: "Data is saved ", success: true, data: results })
    console.log(results)
})
app.listen(1900)