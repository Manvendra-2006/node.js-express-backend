import mongoose from "mongoose";
import express from 'express'
import StudentModel from "./Model/StudentModel.js";
const app = express()
await mongoose.connect("mongodb://localhost:27017/Login_Data")
app.use(express.json())
app.delete("/delete/:id",async (req,resp)=>{
    const id3 = req.params.id
    const StudentData  = await StudentModel.findByIdAndDelete(id3,{  // This will data from mongodb 
        ...req.body
    })
    resp.send({
        message:"Data is Deleted",
        success:true,
        INFO:StudentData,
    })
})
app.listen(8900)