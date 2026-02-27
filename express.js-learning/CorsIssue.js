import express from 'express'
const app = express()
app.use(Cors())  // this Cors package allow api to access in different port also // Middleware
app.listen(1200)
