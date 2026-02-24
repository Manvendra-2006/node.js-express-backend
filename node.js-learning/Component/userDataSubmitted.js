const fs = require('fs')
function userDataSubmitted(req,resp){

    resp.write("Data is Submitted")
    resp.end()
}
module.exports = userDataSubmitted