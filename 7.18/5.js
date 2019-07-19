var express = require("express")
var app = express()
app.get("/",(req,res)=>{
    res.send("首页")
})
app.get("/new",(req,res)=>{
    console.log(req.query)
    res.send("接收成功")
})
app.listen(5000)

