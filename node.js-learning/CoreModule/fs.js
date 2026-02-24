const fs = require('fs')
fs.writeFileSync("file/hello.txt","Hello , This is Manvendra Bhardwaj") // This is used to create a file // Sync method  block next line of codes until it will not executed
const data = fs.readFileSync("file/hello.txt","utf-8") // This methos is used to read a file
console.log(data)
fs.appendFileSync("file/hello.txt","This is Bhaili , Chhatisgarh") // This is used to append data in file
fs.writeFileSync("file/web.txt","Hello , This is manas bhardwaj") 
fs.unlinkSync("file/web.txt")  // This is used to delete a file