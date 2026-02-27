import mongoose from 'mongoose' // mongoose is npm package which is used to connect node.js and mongodb
async function dbCollection(){
    await mongoose.connect("mongodb://localhost:27017/Login_Data") // Here , we connect mongoose with mongodb
    const schema = mongoose.Schema({  // Here Schema tells the data Structure of mongodb
        name:String,
        classes:String,
        subject:String,
    })
    const Model = mongoose.model('Data',schema,'hello') // Here , we make model , model is a tool which edit , delete , get data from mongodb
    const result = await Model.find() // Here , we getting our data from model tool
    console.log(result)
}
dbCollection()