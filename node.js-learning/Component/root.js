const http = require('http')
const userForm = require('./userForm')
const userDataSubmitted = require('./userDataSubmitted')
http.createServer((req,resp)=>{
        resp.writeHead(200,{"Content-Type":"text/html"})
    if(req.url=="/"){
        userForm(req,resp)
    }
    else if(req.url="/submit"){
        userDataSubmitted(req,resp)
    }
}).listen(8800)