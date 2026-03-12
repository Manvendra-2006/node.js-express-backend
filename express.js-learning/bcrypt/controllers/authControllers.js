import User from "../models/User.js"
async function signupuser(req,resp){
    const {name,email,password} = req.body
    const userExists = User.findOne({email})
    if(userExists){
        return resp.status(400).json({"message":"User Is already Exists"})
    }
    const hashPassword = await bcrypt.hash(password,10)
     await User.create({
        name,
        email,
        password : hashPassword,
     })
     resp.status(500).json({"message":"User is registered successfully"})
}
export default signupuser