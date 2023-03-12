"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const body = this.body;
        const {id,psword} = UserStorage.getUserInfo(body.id);
        if(id){
            if(body.id == id && body.psword == psword){
                return {success: true};
            }
            return {success:false, msg: "pw not exist"};
        }
        return {success:false,msg:"id not exist"};
    }
}

module.exports = User;