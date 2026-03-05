import express from 'express'
import multer from 'multer'  // multer is a npm pacakge or middlwareused in route to handle file uploads
const app = express()
const storage = multer.diskStorage({ // Here DiskStorage tells multer where and how files can be upload
    destination:function(req,file,cb){
        cb(null,'upload')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage}) // Here , upload is a middleware used in route to handle file uploads  // ye middleware hain ye storage congiguration ka use krega
app.get("/",(req,resp)=>{
    resp.send(`
        <form action="/upload" method="post" enctype="multipart/form-data"> // This encoding type a single form can send text fields , and files 
        <input type="file" name="myfile"/>
        <button>Upload Files</button>
        </form>
        `)
})
app.post("/upload", upload.single('myfile') ,(req,resp)=>{
    resp.send({
        message:"file Created",
        info:req.file
    })
})
app.listen(1300)