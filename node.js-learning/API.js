const http = require('http')
const userData = [
    {
        name:"manvendra",
        class:"p2",
        subject:"maths"
    },
    {
        name:"manas",
        class:"p5",
        subject:"english"
    },
    {
        name:"manav",
        class:"p8",
        subject:"hindi"
    }
]
http.createServer((req,resp)=>{
    resp.writeHead(200,{"Content-Type":"text/html"})
    resp.write(JSON.stringify(userData))
    resp.end()
    
}).listen(7600)

//http://localhost:7600/ simple API