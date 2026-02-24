const fs = require('fs')
fs.writeFileSync("file/hello.txt","Hello , This is Manvendra Bhardwaj") // This is used to create a file // Sync method  block next line of codes until it will not executed
const data = fs.readFileSync("file/hello.txt","utf-8") // This methos is used to read a file
console.log(data)
fs.appendFileSync("file/hello.txt","This is Bhaili , Chhatisgarh") // This is used to append data in file
fs.writeFileSync("file/web.txt","Hello , This is manas bhardwaj") 
fs.unlinkSync("file/web.txt")  // This is used to delete a file
// Crud Operation
const arg = process.argv
console.log(arg)
const name = arg[3]
const content = arg[4]
if(arg[2] == "write"){
    fs.writeFileSync("file/"+name+".txt",content)
}
else if(arg[2] == "read"){
    const Data = fs.readFileSync("file/"+name+".txt","utf-8")
    console.log(Data)
}
else if(arg[2] == "delete"){
    fs.unlinkSync("file/"+name+".txt")
}
else if(arg[2] == "append"){
    fs.appendFileSync("file/"+name+".txt",content)
}
