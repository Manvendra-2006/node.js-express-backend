import { MongoClient } from "mongodb";
const dbName = "Login_Data"
const URL = "mongodb://localhost:27017"
const client = new MongoClient(URL)
async function dbCollection(){
    await client.connect();
    const db = client.db(dbName)
    const collection = db.collection('hello')
    const result = await  collection.find().toArray()
    console.log(result)
}
dbCollection()



