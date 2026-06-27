import mongoose from "mongoose";
const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    otpHash:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
export default mongoose.model("OTP",otpSchema)