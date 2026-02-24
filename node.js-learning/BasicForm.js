const http = require('http')
http.createServer((req,resp)=>{
    resp.writeHead(200,{"Content-Type":"text/html"})
    if(req.url=="/"){
        resp.write(`
            <form action="/submit" method="POST">
            <input type="text" placeholder="Enter Text" name="name"/>
            <input type="text" placeholder="Enter Full Name" name="text"/>
            <button>Submit</button>
            </form>
            `)
            resp.end()
        }
    else if (req.url=="/submit")
    {
        resp.write("<h1>Data is Submitted</h1>")
          resp.end()
    }
  
}).listen(9999)