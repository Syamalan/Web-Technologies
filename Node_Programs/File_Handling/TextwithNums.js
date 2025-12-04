var fs = require("fs")
fs.readFile('text.txt',(err,data)=>{
    if(err) console.log(err.message)
    var str = data.toString()
    var lines = str.split("\n")
    for(i=0;i<lines.length;i++){
        console.log((i+1)+" "+lines[i])
    }

})