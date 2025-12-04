var fs=require('fs')
var express = require('express')
const bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({extended:false}))


app.get('/',(req,resp)=>{
    resp.sendFile('login.html',{root:__dirname})
    // resp.send("<h1>Welcome to Express</h1>")
})
var arr=[]

app.post('/store',(req,resp)=>{
    var uname=req.body.un
    var pass = req.body.pass
    arr.push({
        "Username":uname,
        "Password":pass})
    console.log(arr)
})

app.listen(3000,()=>{
    console.log("Server is Listening")
})