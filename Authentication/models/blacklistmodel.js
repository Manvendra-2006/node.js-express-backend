import mongoose from "mongoose";
const blacklistData = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    accessToken:{
        type:String,
        required:true
    }
})
export default mongoose.model("BlackList",blacklistData)