import express from 'express'
import {WebSocketServer} from 'ws'
const app = express()
const server = app.listen(4500,()=>{ // Here Server will give us instance of port  
    console.log("Server is running on port 4500")
})
//Creating a WebSocket Server
const wss = new WebSocketServer({server})
wss.on("connection",(ws)=>{ // WebSocket connect // yaha par ws connected client ka socket object hain 
    ws.on("message",(data)=>{ // clent send data in buffer form 
        console.log("data from client %s:",data) // %s is a format specifier which is used to print data in text form 
        ws.send("THanks Buddy!") // server send  data
    })
})