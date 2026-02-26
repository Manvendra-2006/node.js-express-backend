const http = require('http')
const fs = require('fs')
const path = require('path')
http.createServer((req,resp)=>{
    const filePath1 = path.join(__dirname,"..","file","Header.html");
   let collectedData = fs.readFileSync(filePath1,"utf-8") // Here , we use sync method because it will not go on next line until it will not get value of collectedData
    if(req.url=="/"){
          const filePath = path.join(__dirname,"..","file","Home.html")
        fs.readFile(filePath,"utf-8",(err,data)=>{
            if(err){
                resp.writeHead(500,{"Content-Type":"text/plain"})
                resp.write("Internal Server Error")
                resp.end()
                return false;
            }     
           
            resp.writeHead(200,{"Content-Type":"text/html"})    
            resp.write( collectedData+" "+ data)
            resp.end();
        })
    }
   else if(req.url == "/about"){
 const filePath = path.join(__dirname,"..","file","About.html")
        fs.readFile(filePath,"utf-8",(err,data)=>{
            if(err){
                resp.writeHead(500,{"Content-Type":"text/plain"})
                resp.write("Internal Server Error")
                resp.end()
                return false;
            }     
           
            resp.writeHead(200,{"Content-Type":"text/html"})    
            resp.write( collectedData+" "+ data)
            resp.end();
        })
    }
     else if(req.url == "/service"){
 const filePath = path.join(__dirname,"..","file","Service.html")
        fs.readFile(filePath,"utf-8",(err,data)=>{
            if(err){
                resp.writeHead(500,{"Content-Type":"text/plain"})
                resp.write("Internal Server Error")
                resp.end()
                return false;
            }     
           
            resp.writeHead(200,{"Content-Type":"text/html"})    
            resp.write( collectedData+" "+ data)
            resp.end();
        })
    } else if(req.url == "/contact"){
 const filePath = path.join(__dirname,"..","file","Contact.html")
        fs.readFile(filePath,"utf-8",(err,data)=>{
            if(err){
                resp.writeHead(500,{"Content-Type":"text/plain"})
                resp.write("Internal Server Error")
                resp.end()
                return false;
            }     
           
            resp.writeHead(200,{"Content-Type":"text/html"})    
            resp.write( collectedData+" "+ data)
            resp.end();
        })
    }
    else if(req.url="/style.css")    {
        const filePath = path.join(__dirname,"..","file","style.css")  // If your .js file in different folder and your html or css file in different folder
       fs.readFile(filePath,"utf-8",(err,data)=>{
        if(err){
  resp.writeHead( 500,{"Content-Type":"text/plain"})
            resp.write("CSS Not found")
            resp.end()
        }
  resp.writeHead(200,{"Content-Type":"text/css"})
        resp.end(data)
       })

    }
    
}).listen(7800)




                  