var fs=require("fs")
var arr = [
  { empid: 1, empname: "Syamala", dept: "Sales", sal: 20000 },
  { empid: 2, empname: "Saiki", dept: "Dev", sal: 30000 },
  { empid: 3, empname: "Saranya", dept: "Tester", sal: 40000 },
  { empid: 4, empname: "Harika", dept: "Admin", sal: 50000 }
];
var str=""
for(i=0;i<arr.length;i++){
    str+=(arr[i].empid+":"+arr[i].empname+":"+arr[i].dept+":"+arr[i].sal+"\n")
    
}
fs.writeFile("empdata.txt",str,(err)=>{
                        if(err)
                            err.message()
                        console.log("Written Successful")})