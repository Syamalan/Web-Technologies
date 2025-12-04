var fs = require("fs")
//using require method
var data = require("./customer.json")
for(i=0;i<data.length;i++){
    console.log("Customer Name: "+data[i].CName +" Address: "+ data[i].Address)
}
//using ReadFile
fs.readFile('./customer.json',(err,data)=>{
    if(err) throw err;
    var users = JSON.parse(data)
    for(i=0;i<users.length;i++){
    console.log("Customer Name: "+users[i].CName +" Address: "+ users[i].Address)
}
    
})