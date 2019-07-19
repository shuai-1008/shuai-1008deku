var http = require("http")
var fs = require("fs")
var art = require("art-template")
http.createServer((req,res)=>{
    fs.readFile("./view/arttemplate.art",(err,data)=>{
        var str = data.toString();
        var datas = {
            list:["a","s","d"]
        }
        var result = art.render(str,datas)
        res.end(result)
    })
}).listen(5000)