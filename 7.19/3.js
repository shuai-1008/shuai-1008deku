var express = require("express")
var art = require("express-art-template")
var app = express()
var router = express.Router()
app.use(router)
//设置模板引擎  
//第一个参数为  art  ejs  jade =》 pug  swig
app.engine("art",art)
app.get("/",(req,res)=>{
    //.art必须写上，不然express-art-template不识别
    res.render("new.art",{
        list:["2","1","3"]
    })
})
router.get("/getcode",(req,res)=>{
    var randomNum = function(min,max){
        return Math.ceil(Math.random()*(max-min)+min)
    }
    var str = "abcdefjhigklmnopqrstuvwxyz0123456789"
    var result = ""
    for(var i = 0;i<4;i++){
        result+=str[randomNum(0,str.length-1)]
    }
    res.send({"data":result})
})
app.listen(5000)

