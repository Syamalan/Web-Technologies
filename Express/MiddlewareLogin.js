var users = [
  {uname: "shrilata", pass: "secret"},
  {uname: "admin", pass: "admin123"},
  {uname: "user1", pass: "pass1"}
]
var fs=require("fs")
var express = require("express")
var app = express()
const bodyParser=require('body-parser')
const { notDeepEqual } = require("assert")
app.use(bodyParser.urlencoded({extended:false}))



app.get('/',(req,resp)=>{
    resp.sendFile('login.html',{root:__dirname})

})
// var data=app.post('/store',(req,resp)=>{
//     var uname = req.body.un//thease names should be same as login.html
//     console.log(uname)
//     var pass = req.body.pass
//     console.log(pass)
//     var found = false
//     for(user of users){
//         console.log(user.uname)
//         console.log(user.pass)
//         if(user.uname==uname && user.pass==pass){
//             resp.sendFile('success.html',{root:__dirname})
//             found = true
//             break
//         }
//     }
//         if(found==false){
//             resp.sendFile('failure.html',{root:__dirname})
//         }
    
// })
//Using middleware to check
// steps: 1.write a function to verify user is there are not.if yes call next(), if nit send resp with failure html file
// 2.then call app.post with function name as argu send the success file in resp.send success html
function Authenticate(req,resp,next){
    var uname = req.body.un//thease names should be same as login.html
    var pass = req.body.pass
    var found=false
    for(user of users){
        if(user.uname==uname && user.pass==pass){
            found=true
            break;
        }
    }
    if(found){
        next()
    }
   else{
        resp.sendFile('failure.html',{root:__dirname})
    }
}

app.post('/store',Authenticate,(req,resp)=>{
    resp.sendFile('success.html',{root:__dirname})
})

app.listen(3000)
console.log("Server is listening ")
