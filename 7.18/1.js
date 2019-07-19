//引入服务器模块
var http = require("http")
//ejs 模板引擎
var ejs = require("ejs")
//fs = file system
var fs = require("fs")
//创建服务器
http.createServer((req,res)=>{
    // req = request  请求   res = response 响应
    var list = ["S","d","q"]
    fs.readFile("./view/index.ejs",(err,data)=>{
        var str = data.toString()
        var result = ejs.render(str,{list1:list})
        res.end(result)
    })
}).listen(5000,function(){
    console.log("服务器已启动")
})
// listen()监听端口