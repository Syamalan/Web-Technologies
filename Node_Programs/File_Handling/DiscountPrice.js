var fs=require("fs")
fs.readFile('./Books.json',(err,data)=>{
    if(err) throw err
    var info = JSON.parse(data)
    for(i=0;i<info.length;i++){
        var finalprice=parseInt(info[i].price)-parseInt(info[i].price*(0.1))
        console.log("Book|bookname|author|sellingprice|finalprice")
        var data = info[i].bID+"|"+info[i].bname+"|"+info[i].author+"|"+info[i].price+"|"+finalprice+"\n"
        fs.appendFile("files.txt",data,(err)=>console.log(err.message))
    }
})