var http = require("http")
var fs = require("fs")
var fd = require("formidable")
var sd = require("silly-datetime")
var path = require("path")
http.createServer((req,res)=>{
    if(req.url == "/favicon.ico"){
        return
    }
    if(req.url == "/dopost"){
        var form = new fd.IncomingForm()
        console.log(form)
        form.uploadDir = "./upload"
        form.parse(req,function(err,fields,files){
            //fields  文本域   files  文件域
            var oldpath = files.pic.path
            var extname = path.extname(files.pic.name)
            var tt = sd.format(new Date(),"YYYYMMDDhhmmss")
            var newpath = "upload/"+tt+extname
            console.log(oldpath)
            fs.rename(oldpath,newpath,(err)=>{
                res.end("success")
            })
        })
    }
}).listen(5000)