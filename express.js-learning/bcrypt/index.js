import express from 'express'
 import router from './Router/router.js'
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/auth",router)
app.listen(8900)