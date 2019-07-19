var http = require("http")
var path = require("path")
http.createServer((req,res)=>{
    // path.resolve 将最后一个参数转换为绝对路径
    // var oldpath = path.resolve("./1.js")
    //path.normalize()路径的格式化
    // var oldpath = path.normalize("/aa/vv/bbbbbb/////bbb/bbn/b/n/b//////bbvf/")
    //path.extname()获取文件的扩展名
    // var oldpath = path.extname("./a.html")
    //path.format()将对象转换为路径
    // var oldpath = path.format({
    //     root:"",
    //     dir:"c:\a\b",
    //     base:"\d"
    // })
    //path.isAbsolute 判断是否是绝对路径，返回绝对路径
    var oldpath = path.isAbsolute("1.js")
    //path.join 链接路径
    // var oldpath = path.join("./aa","/bb","cc")
    // path.relative()相对路径
    //path.dirname()目录
    //path.parse()解析文件路径
    console.log(oldpath)
    res.end("1")
}).listen(5000)