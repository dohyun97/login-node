"use strict";

const id = document.querySelector("#id"),
   name = document.querySelector("#name"),
   confirmPsword =document.querySelector("#confirm-psword"),
   psword=document.querySelector("#psword"),
   registerBtn=document.querySelector("#button");


   registerBtn.addEventListener("click",register);

function register(){
    if(!id.value) return alert("Please type id");
    if(psword.value !== confirmPsword.value) return alert("Password is not same");
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
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
            location.href = "/login";
        }else{
            alert(res.msg);
        }
    }).catch((error)=>{
        console.error(new Error("Error while in register"));
    });
}