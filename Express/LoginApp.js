var fs=require('fs')
var express = require('express')
var app = express()

let users=[
    {uname:"Syamala",pass:"Secret"},
    {uname:"Harika",pass:"Harika@25"},
    {uname:"Admin",pass:"admin"},
]

app.get('/',(req,resp)=>{
    resp.sendFile('login.html',{root:__dirname})
    // resp.send("<h1>Welcome to Express</h1>")
})

app.listen(3000,function(){
    console.log("Server is Listening")
})
