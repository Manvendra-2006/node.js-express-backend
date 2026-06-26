import mongoose from "mongoose";
export default async function connectDb(){
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DataBase is connected successfully")
    }
    catch(error){
        console.log("Database is not connected successfully",error)
    }
}