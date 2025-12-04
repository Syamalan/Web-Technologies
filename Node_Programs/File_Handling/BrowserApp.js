var http = require("http")
var msg = require("./greet.js")

console.log(typeof(data))
function processReq(req,resp){
    var data = msg.greetUser()

    var len = data.length
    resp.writeHead(200,{
        "content-length":len,
        "content-type":"text/html"}

    )
    resp.write(data)
    resp.end()
  }
  var server = http.createServer(processReq)

 server.listen(3000,'127.0.0.1')
 console.log("server is listening")