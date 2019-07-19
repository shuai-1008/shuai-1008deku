var http = require("http");
var url = require("url")
var fs = require("fs")
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return;
    }
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    var query = url.parse(req.url,true).query
    // var query = url.parse(req.url).path
    // console.log(query)
    fs.readFile("./zuoye.html",(err,data)=>{
        if(query.type && query.sysid){
            if(query.type == "学生"){
                res.end("学生:"+query.sysid)
            }else if(query.type == "老师"){
                res.end("老师:"+query.sysid)
            }
        }else{
            res.end(data)
        }
    })
}).listen(5000)