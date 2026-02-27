import mongoose from "mongoose";
import schema from "../Schema/StudentSchema.js";
const StudentModel = mongoose.model('Data',schema,'hello')
export default StudentModel