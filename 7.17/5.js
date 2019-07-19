var http = require("http")
var fs = require("fs")
var ejs = require("ejs")
http.createServer((req,res)=>{
    //数据
    var datas = {
        "list":[
            {
                name:"tom",
                age:12
            },{
                name:"toms",
                age:18
            }
        ]
    }
    //ejs render渲染 模板 数据 compiler 编译
    fs.readFile("./5.ejs",(err,data) => {
        //template ejs模板
        var aa = data.toString()
       var result =  ejs.render(aa,datas)
        res.end(result)
    })
}).listen(5000)
