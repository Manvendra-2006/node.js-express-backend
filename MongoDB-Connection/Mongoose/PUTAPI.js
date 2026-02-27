import mongoose from "mongoose";
import express from 'express'
import StudentModel from "./Model/StudentModel.js";
const app = express()
await mongoose.connect("mongodb://localhost:27017/Login_Data")
app.use(express.json())
app.put("/update/:id",async (req,resp)=>{
    console.log(req.params.id)
    const id3 = req.params.id; 
    console.log(id3)
    const StudentData = await StudentModel.findByIdAndUpdate(id3,{ // This will update data in mongodb by the help of id given in url
        ...req.body
    })    
    resp.send({
        message:"Data is updated",
        success:true,                
        INFO:StudentData,
    })
})
app.listen(8900)