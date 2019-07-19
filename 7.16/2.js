var http = require("http")
var url = require("url")
http.createServer((req,res)=>{
    // var query = url.parse(req.url)
    // // console.log(query)
    // // res.end(query.toString())
    // // var query = url.resolve("http://127.0.0.1:2000","/a/b")
    
    // var query = url.format({
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: "http://127.0.0.1",
    //     port: "2000",
    //     hostname: null,
    //     hash: null,
    //     search: null,
    //     query: null,
    //     pathname: '/',
    //     path: '/',
    //     href: '/'
    // })
    // res.end(query.toString())
}).listen(2000)