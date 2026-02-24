// console.log("apple")
// setTimeout(()=>{
//     console.log("banan")
// },2000) 
// JS and Node.js are by default synchronus but we make it async by using setimeout() function
const fs = require('fs')
fs.writeFile("file/yellow.txt","This is yellow") // it will run second time
console.log("next") // It will run first 
