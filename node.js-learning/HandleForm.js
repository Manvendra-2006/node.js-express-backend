const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
http.createServer((req,resp)=>{
    if(req.url=="/" && req.method=="GET"){
        fs.readFile("html/data.html","utf-8",(err,data)=>{
            if(err){
                resp.writeHead(404,{"Content-type":"text/plain"})
                resp.end()
            }
            resp.writeHead(200,{"Content-Type":"text/html"})
            resp.write(data)
            resp.end()
        })
    }
    else if(req.url == "/submit" && req.method=="POST"){
        resp.writeHead(200,{"Content-Type":"text/html"})
        resp.write("Data is Submitted")
        let dataBody = []
        req.on('data',(chunk)=>{
            dataBody.push(chunk)
        })
        req.on('end',()=>{
            let rawData = Buffer.concat(dataBody).toString() // Data is coming in Buffer form where it stores data temporaily in binary bits that's why we first concat the convert it into string.
            let readableData = querystring.parse(rawData)
            console.log(readableData)
            let dataString = readableData
            fs.writeFile("file/hello.txt",dataString,"utf-8",(err)=>{
                if(err){
                    resp.end()
                    return false;
                }
                else{
                    console.log("File is created")
                }
            })
        })
        resp.end()
    }
    
}).listen(8700)