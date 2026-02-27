import mongoose from "mongoose";
import express from 'express'
import StudentModel from "./Model/StudentModel.js";
const app = express()
await mongoose.connect("mongodb://localhost:27017/Login_Data")
app.get("/",async (req,resp)=>{
    const StudentData = await StudentModel.find()
    resp.send(StudentData)
})
app.listen(8900)

// This is a GETAPI http://localhost:8900/