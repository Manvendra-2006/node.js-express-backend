// dotenv package is a package which manage environment variables like API, MonogdbURL , so that sensitive data is not on your code .
import express from 'express'
import dotenv from 'dotenv'
import mongodb from 'mongodb'
import {MongoClient} from 'mongodb'
const app = express()
const dbName = "WebsiteData"
dotenv.config() // This is a function in dotenv which loads the variable from .env file and set it into process.env so that in node.js you can access it directly
const URL = process.env.MONGO_URL
const client = new MongoClient(URL)
async function dbCollection(){
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection('users')
    const result= await collection.find().toArray()
    console.log(result)
}
dbCollection()
app.listen(8900)