var express = require("express")
var app = express()
app.get("/",(req,res)=>{
    res.send("首页")
})
app.get("/about/:id",(req,res)=>{
    res.send("路由接收的参数是："+req.params.id)
})
app.listen(5000)

