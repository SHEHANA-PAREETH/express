
//import express
const e = require("express");
const express=require("express");

const app=express();


//appln middleware
app.use(middleware1);
app.use(middleware2);
function middleware1(req,res,next){
    console.log("at middleware1");
    next();
}
function middleware2(req,res,next){
    console.log("at middleware2");
    next();
}
//routerlevel middleware
function testmiddleware(req,res,next){
    console.log("at middlewarerouter");
    next();
}
//error handling middleware

app.get("/",testmiddleware,(req,res)=>{
res.send("string send");
});
app.get("/home",(req,res)=>{
    res.sendFile("./view.html",{root:__dirname})
})
app.listen(4000,(err)=>{
    if (err)
    console.log(err);
    else
    console.log("server running");
})