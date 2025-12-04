var fs=require('fs')
const express = require('express');
const cors = require('cors');
var app = express()

app.use(cors());
let studs = [
    {sid: 101, sname: "Savita", course: "DIoT"},
    {sid: 102, sname: "Kavita", course: "DAC"},
    {sid: 103, sname: "Anita", course: "DESD"},
    {sid: 104, sname: "Sunita", course: "DIoT"},
    {sid: 105, sname: "Babita", course: "DMC"}
];

app.get('/students',(req,resp)=>{
    resp.send(studs)
})

app.get('/students/:sname',(req,resp)=>{
    var name= req.params.sname
    let found=false
    for(stud of studs){
        if(stud.sname==name){
            resp.send("Student ID:"+stud.sid+"<br> Student Name"+stud.sname+"<br>Student Course:"+stud.course)
            found=true
            break;
        }

    }
    if(!found){
        resp.send("Not found the Student")
    }
})

app.listen(3000,()=>{
    console.log("Server is Listening")
})