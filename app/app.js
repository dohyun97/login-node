// const http = require("http");
// const app = http.createServer((req,res)=>{
//    if(req.url==="/"){
//     res.end("this is root")
//    }else if(req.url ==="/login"){
//     res.end("This is login");
//    }
// });

// app.listen(3001,()=>{
//     console.log("This is http server")
// })

//module
const express = require("express");
const app = express();



//app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

//routing
const home = require("./src/routes/home/index.js");
app.use("/",home); //middleware

module.exports = app;