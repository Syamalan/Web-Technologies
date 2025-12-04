var fs=require('fs')
var express = require('express')
var app = express()


app.get('/',(req,resp)=>{
    resp.sendFile('strings.html',{root:__dirname})
    // resp.send("<h1>Welcome to Express</h1>")
})

app.get('/display',(req,res)=>{
    var st1=req.query.s1
    var st2=req.query.s2
    var st3=req.query.s3

    res.send("The Parameters are : "+"<ul><li>"+st1+"</li><li>"+st2+"</li><li>"+st3+"</li></ul>")


})

app.listen(3000,function(){
    console.log("Server is Listening")
})