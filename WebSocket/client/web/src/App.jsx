import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
    const [socket,setsocket] = useState(null)
    const [message,setmessage] = useState("")
    const [allMessage,setAllmessage] = useState([])
    useEffect(()=>{
      const ws = new WebSocket("ws://localhost:4500") // create connection
      setsocket(ws) // socket save
      // Browser in sab ko chalta  hain 
      ws.onopen = () =>{ // connection open
        console.log("Connected to WebSocket Server")
      }
      ws.onmessage = (event)=>{
        console.log("Message from Server:",event.data)
        setAllmessage((prev)=>[...prev,event.data])
      }
      ws.onclose=()=>{
        console.log("Disconnected")
      }
      ws.onerror = (error) =>{
        console.log("WebSocket Error",error)
      }
      return ()=>{
        ws.close() // clean up function ke lie
      }
    },[])
    function sendMessage(){
      if(socket){
        socket.send(message)
        setmessage("")
      }
    }
  return (
    <div>
      <h1>WebSocket</h1>
  <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e)=>setmessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      {
        allMessage.map((item)=>{
          return(
            <div>
              <h1>{item}</h1>
              </div>
          )
        })
      }
    </div>
  )
}

export default App