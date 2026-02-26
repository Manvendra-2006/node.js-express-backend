import { userData } from "../Models/userData.js";

export function Controller(req,resp){
    resp.render("user",{Data:userData()})  // Here we call userdata() because we want value
}