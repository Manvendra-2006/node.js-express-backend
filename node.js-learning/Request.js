const http = require('http')
http.createServer((req,resp)=>{
    resp.writeHead(200,{"Content-Type":"text/html"})
    //Route checking code
    if(req.url=="/"){ // Here this comes from clinet and server 
        resp.write("<h1>Home Page</h1>") // response this 
    }
    else if(req.url=="/login"){
        resp.write("<h1>Login Page</h1>")
    }
    else if(req.url=="/submit"){
        resp.write("<h1>Submit Page</h1>")
    }
    else{
        resp.write("Other page")
    }
    resp.end()
}).listen(4500)
