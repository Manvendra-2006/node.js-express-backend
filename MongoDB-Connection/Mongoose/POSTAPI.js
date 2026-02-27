import mongoose from "mongoose";
import express from 'express'
import StudentModel from "./Model/StudentModel.js";
const app = express()
await mongoose.connect("mongodb://localhost:27017/Login_Data")
app.use(express.json())  // THis convert json data into parse
app.post("/save",async (req,resp)=>{
    const {name,classes,subject} = req.body;
    const StudentData = await StudentModel.create(req.body) // this line update data in mongodb by the help of create()
    if(!req.body || !name || !classes || !subject){  // This is a validation conditon 
        resp.send({
             message:"Data is not Stored",
        success:false,
        Info:StudentData,
        })
        return false;
    }
    resp.send({
        message:"Data is Stored",
        success:true,
        Info:StudentData,
    })
})
app.listen(8900)

//http://localhost:8900/save is a POSTAPI 