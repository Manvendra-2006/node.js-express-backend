import {MongoClient} from 'mongodb'
import express from  'express'
const URL ="mongodb://localhost:27017" // This is a mongoDB URL 
const dbName = "Login_Data"   // This is a database
const client = new MongoClient(URL) // Here we create a new client object in MongoClient object where url of mongodb server is stored
async function dbCollection(){  // This is async function because data coming from database is taking time 
    await client.connect(); // Here , we connect client object to MongoDB Server
    const db = client.db(dbName) // Here , we accessing database
    const collection = db.collection('hello') // Here , we accessing collection
    const result = await collection.find().toArray(); // Here , we find data convert it into Array 
    console.log(result);

}   
dbCollection()
const app =express()
app.listen(1700)


// Node.js => Apke js ke code ko run karta hain 
// npm pacakge mongodb = > Node.js ko mongodb server ke sath connect krta hain
// MongoClient => npm pacakage mongodb ka jo actual connect krta hain mongodb server ko 
























