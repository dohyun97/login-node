"use strict"
const UserStorage = require("../../models/UserStorage");
const User  = require("../../models/User");
const output = {
    hello: (req,res)=>{
        res.render("home/index");
    },
   login: (req,res)=>{
    res.render("home/login");
   },
   register: (req,res)=>{
    res.render("home/register");
   },
};

const process = {
    login: (req,res)=>{
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
        // const id =req.body.id,
        //    psword = req.body.psword;

        // const users = UserStorage.getUsers("id","psword");
        // console.log(users);
        // const response ={};
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.psword[idx] === psword){
        //         response.success=true;
        //         return res.json(response);
        //     }
        // }
        // response.success=false;
        // response.msg="Fail to login";
        // return res.json(response);
    },
}


module.exports={
    output,
    process,
};