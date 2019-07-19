var http = require("http")
var fs = require("fs")
http.createServer((req,res)=>{
    // res.end("aaa")
    // res.end(req.url)
    console.log(req.url)
    res.writeHead(200,{"Content-type":"text/html;charset= UTF8"})
    // res.end("绿色") 
    if(req.url == "/red"){
        fs.readFile("red.html",(err,data)=>{
            res.end(data)
        })
    }else if(req.url == "/green"){
        fs.readFile("green.html",(err,data)=>{
            res.end(data)
        })
    }
}).listen(1000)
