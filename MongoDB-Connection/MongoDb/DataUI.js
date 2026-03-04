import { MongoClient } from "mongodb";
import express from 'express'
const app = express()
const URL = "mongodb://localhost:27017"
const dbName = "Login_Data"
const client = new MongoClient(URL)
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.get("/",async (req,resp)=>{
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection('hello')
    const result = await collection.find().toArray()
    resp.render("home",{Data:result})
})
app.listen(1200)