import mongoose from "mongoose";
const sessionSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true,"User is required"]
    },
    refreshTOkenHash:{
        type:String,
        required:true
    },
    ip:{
        type:String,
        required:true
    },
    userAgent:{ // by wihc we can identify which broser is used by client
        type:String,
        required:true
    },
    revoke:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})
export default mongoose.model("Session",sessionSchema)