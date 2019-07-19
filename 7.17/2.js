//模块抛出


//项目依赖 node_modules       包管理工具  npm

var http = require("http")
var router = require("./touter.js")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    if(req.url == "/"){
        router.showIndex(req,res)
    }else if(req.url == "/about"){
        router.showAbout(req,res)
    }else if(req.url == "/news"){
        router.showNews(req,res)
    }else{
        router.show404(req,res)
    }
}).listen(5000)