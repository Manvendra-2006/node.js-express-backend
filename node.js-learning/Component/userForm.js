const fs = require('fs')
function userForm(req,resp){      
        resp.write(`
              <form action="/submit" method="POST">
            <input type="text" placeholder="Enter Text" name="name"/>
            <input type="text" placeholder="Enter Full Name" name="text"/>
            <button>Submit</button>
            </form>
            `)
            resp.end()
}
module.exports=userForm