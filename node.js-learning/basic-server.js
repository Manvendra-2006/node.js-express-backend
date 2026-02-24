// This is a basic Server
const http =  require('http')  // http is a core module which is imported in this .js file to create a server 
http.createServer((req,resp)=>{  
    resp.writeHead(200,"text/html")  // Here, this line give the header to the server i.e, 200 stands for correct and "text/html" is used to give text 
    resp.write("<h1>Home Page</h1>")  // This line is used to send data to the client
    resp.end()  // This line ends the response 
}).listen(8700)  // This is a port 

// Is it possible to make two server in same file?
// Yes , We can make two server in same file but each server listens two different ports.