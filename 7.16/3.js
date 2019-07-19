var http = require("http")
var url = require("url")
var fs = require("fs")
http.createServer((req,res)=>{
    //去掉多余的undefined
    if(req.url == "/favicon.ico"){
        return
    }
    //数据库存放的内容
    var obj = {
        username : "tom",
        password : "123456"
    }
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"})
    var query = url.parse(req.url,true).query
    fs.readFile("form.html",(ree,data)=>{
        res.end(data)
    })
    if(query.name){
        if(query.name == obj.username && query.pass == obj.password){
            res.end("提交成功")
        }else{
            res.end("提交失败")
        }
    }
}).listen(5000)