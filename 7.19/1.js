var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")
var publicPath = path.resolve(__dirname,"static")
var app = express()
//post  json  字符串
//处理json数据的请求
app.use(bodyParser.json())
//处理字符串数据的请求
app.use(bodyParser.urlencoded({extends:false}))
console.log(publicPath)
//使用静态资源
app.use(express.static(publicPath))
app.get("/",(req,res)=>{
    res.send("首页")
})
app.post("/dopost",(req,res)=>{
    var body = req.body
    console.log(body)
    res.send("post数据传输")
})
app.listen(5000)