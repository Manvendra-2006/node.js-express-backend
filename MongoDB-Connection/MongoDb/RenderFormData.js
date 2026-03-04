import { MongoClient } from "mongodb";
import express from 'express'
const app = express()
const URL = "mongodb://localhost:27017"
const dbName = "Login_Data"
const client = new MongoClient(URL)
await client.connect()
app.get("/",(req,resp)=>{
    resp.send(`
        <form method="POST" action="/add-student">
        <input type="text" placeholder="Enter Text " name="name"/>
        <br/>
        <br/>
        <input type="text" placeholder="Enter Classes" name="classes"/>
        <br/>
        <br/>
        <input type="text" placeholder = "Enter Subject" name="subject"/>
        <br/>
        <br/>
        <button type="submit">Submit</button>
        </form>
        `)
})
app.post("/add-student",async (req,resp)=>{
        const db = client.db(dbName)
        const collection = db.collection('hello')
        // const result = await collection.
})
app.listen(1600)