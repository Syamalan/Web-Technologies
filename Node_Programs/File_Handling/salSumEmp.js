var fs = require("fs")

function sumsal(data){

    str = data.toString()
    var lines = str.trim().split('\n');
    var sum=0
    for(line of lines){
        var ele = line.split(":")
        sum+=parseInt(ele[3])
        
    }
    console.log("Sum is :", sum)

    // var lastItems = [];

    // for (var i = 0; i < lines.length; i++) {
    //     var parts = lines[i].split(':');
    //     var lastItem = parts[parts.length - 1].trim();
    //     lastItems.push(lastItem);
    // }
    // console.log(lastItems)
    // var sum=0
    // for(i=0;i<lastItems.length;i++){
    //     sum+=parseInt(lastItems[i])
    // }
    // console.log(sum)
    

}
var con = fs.readFile("./emp.txt",(err,data)=>{
                                if(err) 
                                    console.log(err.message)
                                else
                                    sumsal(data)
                                })

