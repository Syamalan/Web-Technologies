var fs=require('fs')
var express = require('express')
var app = express()


app.get('/',(req,resp)=>{
    resp.sendFile('simpleint.html',{root:__dirname})
    // resp.send("<h1>Welcome to Express</h1>")
})

app.get('/calSi',(req,res)=>{
    var pr=req.query.p
    var noyear=req.query.years
    var ira=req.query.ir
    var si=(pr*noyear*ira)/100

    res.send("The Simple Interest Earned is:"+si)


})

app.listen(3000,function(){
    console.log("Server is Listening")
})