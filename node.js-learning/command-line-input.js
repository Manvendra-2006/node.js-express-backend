const http = require('http')
const arg = process.argv 
console.log(arg)
// What is argv ?
// argv is a argument vector . It is a property of process object where process object is a global object 
// It is a array what we input from cwd .
// arg[0] => node executable path
// arg[1] => file path
// arg[2] => First Argument
// arg[3] => Second Argument
const port = arg[2]
http.createServer((req,resp)=>{
    resp.write("<h1>This is Manvendra </h1>")
    resp.end()
}).listen(port)

