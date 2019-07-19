var http = require("http")
var fs = require("fs")
http.createServer((req,res)=>{
    // fs.writeFile("./view/1.txt","我是写入的内容",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("sunccess")
    // })
    // fs.readFile("./view/1.txt",(err,data)=>{
    //    fs.writeFile("./view/2.txt",data,(err)=>{
    //         res.end("sunccess")
    //    })
        
    // })
    // fs.copyFile("./view/1.txt","./view/3.txt",(err)=>{
    //     res.end("success")
    // })
    // fs.rename("./view/1.txt","./view/gaiming.txt",(err)=>{
    //     res.end("改名成功")
    // }
    // fs.unlink("./view/gaiming.txt",(err)=>{
    //     res.end("删除成功")
    // })
    // fs.mkdir("./aa",(err)=>{
    //     res.end("chuangjianchenggong")
    // })
    var stream = fs.createReadStream("./view/2.txt")
    var content = ""
    //data 数据读取的过程   end 数据读取完成
    stream.on("data",(chunk)=>{
        content += chunk
    })
    stream.on("end",(chunk)=>{
            console.log(content.toString())
        // console.log("数据接收完毕")
    })
    res.end()
}).listen(5000)
