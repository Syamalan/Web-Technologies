let add = (a,b)=>a+b
let sub = (a,b) => a-b
let mul = (a,b)=>a*b
let div = (a,b)=>a/b
let squ = a=>(a*a)
let max = (a,b,c)=>{
    if(a>b&&a>c)
        return a
    else if(b>c)
        return b
    else
        return c
}
//Simplified version
let maxv=(a,b,c)=>((a>b&&a>c)?a:((b>c)?b:c))
let min = (a,b,c)=>{
    if(a<b&&a<c)
        return a
    else if(b<c)
        return b
    else
        return c
}
module.exports={add,sub,mul,div,squ,max,min,maxv}


