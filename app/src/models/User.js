"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const client = this.body;
        const {id,psword} = UserStorage.getUserInfo(client.id);
        if(id){
            if(client.id == id && client.psword == psword){
                return {success: true};
            }
            return {success:false, msg: "pw not exist"};
        }
        return {success:false,msg:"id not exist"};
    }

    register(){
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;