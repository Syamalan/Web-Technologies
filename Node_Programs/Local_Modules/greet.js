function greet(){
    var t = new Date()

    if(t.getHours>12){
        console.log("Good Afternoon")
    }
    else{
        console.log("Good Morning")
    }
}
exports.greet=greet