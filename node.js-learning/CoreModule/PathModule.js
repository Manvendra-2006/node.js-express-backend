const path = require('path')
const file = "file/hello.txt"
console.log(path.extname(file))  // It give the extension name
console.log(path.basename(file)) // It give the file name 
console.log(path.resolve("file","hello.txt"))  // It give the root path or absolute path of the file
console.log(path.dirname(file)) // it give the folder name where file is stored
console.log(path.isAbsolute(file)) // It return true or false if file is absolute it return true otherwise false
 