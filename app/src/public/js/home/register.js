"use strict";

const id = document.querySelector("#id"),
   name = document.querySelector("#name"),
   confirmPsword =document.querySelector("#confirm-psword"),
   psword=document.querySelector("#psword"),
   registerBtn=document.querySelector("#button");


   loginBtn.addEventListener("click",register);

function register(){
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
    };
    
    fetch("/register",{
       method: "POST",
       headers: {
        "Content-Type": "application/json"
       },
       body: JSON.stringify(req),
    }).then((res) => res.json())
    .then((res)=> {
        if(res.success){
            location.href = "/";
        }else{
            alert(res.msg);
        }
    }).catch((error)=>{
        console.error(new Error("Error while in register"));
    });
}