import app from "./app.js";
import 'dotenv/config'
import connectDb from "./config/configdb.js";
connectDb()
app.listen(8900,()=>{
    console.log("Server is running on port 8900")
})