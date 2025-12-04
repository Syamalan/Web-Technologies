function greet(){
    var t = new Date()

    if(t.getHours()>12){
        console.log("Good Afternoon")
        var msg = "Good Afternoon"
        return msg
    }
    else{
        // console.log("Good Morning")
        var msg = "Good Morning"
        return msg
    }
}
exports.greetUser=greet