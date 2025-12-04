var fs = require("fs")
var arr=["Syamala","Saranya","Saiki"]
//in writeline date takes in string format only you have to convert the array into strings
fs.writeFile("./names.txt",arr.join('|'),(ele)=>{
                                for(ele of arr)
                                    console.log(ele)
                                })
//callback can do anything                              
fs.writeFile("./names.txt",arr.join('|'),(err)=>{
                               if(err)
                                console.log(err.message)
                                })