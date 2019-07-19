var express = require("express")
var cookie = require("cookie-parser")
var app = express()
app.use(cookie())
app.get("/",(req,res)=>{
    res.send("首页")
})
app.get("/set",(req,res)=>{
    //设置cookie
    //cookie httpOnly防止xss攻击  true  false  domain 域名  MaxAge 有效期  size 大小  Expires 过期时间
    res.cookie("username","tom",{maxAge:200000,httpOnly:true})
    res.send("cookie设置成功")
})
app.get("/get",(req,res)=>{
    var name = req.cookies.username
    console.log(name)
    res.send("读取成功"+name)
})
app.listen(5000)