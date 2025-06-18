const express = require("express");
const app = express(); //create an instance http server

app.post("/user/signup",function(req,res){
    res.json({
        message: "signup endpoint"
    })
})

app.post("/user/signin",function(req,res){
    res.json({
        message: "signin endpoint"
    })
})

app.get("/user/purchases",function(req,res){
    res.json({
        message: ""
    })
})

app.post("/user/course/purchase",function(req,res){
    //you would expect the user to pay you money 
    res.json({
        message: ""
    })
})
app.get("/courses",function(req,res){
    res.json({
        message: ""
    })
})
app.listen(3000);