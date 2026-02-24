const http = require('http')
const age = 24;
http.createServer((req,resp)=>{
    resp.writeHead(200,{"Content-Type":"text/html"})
     resp.write("Manas Bhardwaj")
    resp.write("Manvendra Bhardwaj")
   resp.write(`
    <html>
    <head>
    <title>Hello</title>
    </head>
    <body>
    <h1>`+age+`</h1>
    <h1>`+new Date()+`</h1>
    </body>
    </html>
    `)
    resp.end()
}).listen(9800)
// It's way to represent variable in browser