import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())  // this Cors package allow api to access in different port also // Middleware
app.listen(1200)
// Suppose you are making a api on port 3200 and ui run on 5173 then when you access api in ui then the cors issues comes to resolve this issues we use one middleware 
