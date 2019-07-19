//搭建静态资源服务器
var express = require("express")
var path = require("path")
var app = express()
// console.log(__dirname)
var publicpath = path.resolve(__dirname,"aa")
console.log(publicpath)
//使用静态资源服务器  express.static()
app.use(express.static(publicpath))
app.listen(5000)


// mongodb