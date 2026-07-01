const fs = require('fs')
fs.writeFileSync("../file/hello.txt","Helhhhhhhhhhlo ,jjjj ") // This is used to create a file // Sync method  block next line of codes until it will not executed
const data = fs.readFileSync("../file/hello.txt")
console.log(data.toString()) // It will convert the buffer data into string
// const data = fs.readFileSync("file/hello.txt","utf-8") // This methos is used to read a file
// console.log(data)
fs.appendFileSync("../file/hello.txt","hello goodmorning")
fs.unlinkSync("../file/hello.txt")
fs.writeFileSync("../file/hello.txt","jsjsjs")
fs.renameSync("../file/hello.txt","../file/welcome.tct")
// fs.mkdirSync("../file/hee")
const data1 = fs.readdirSync("../file")
console.log(data1)
const data2 = fs.statSync("../file")
console.log(data2)
const data4 = fs.existsSync("../file")
console.log(data4)
// fs.copyFileSync("../file/About.html","../file/CoreModule") //  it have two parameter source and destination
// fs.rmSync("CoreModule")
// fs.appendFileSync("file/hello.txt","This is Bhaili , Chhatisgarh") // This is used to append data in file
// fs.writeFileSync("file/web.txt","Hello , This is manas bhardwaj") 
// fs.unlinkSync("file/web.txt")  // This is used to delete a file
// fs.mkdir("uploads",(err)=>{
//     console.log(err)
// })

const stream = fs.createReadStream("../file/About.html") // it will read the data in chunks form
stream.on("data",(chunks)=>{
    console.log(chunks)
})
stream.on("data",(chunks)=>{
    console.log(chunks)
})
