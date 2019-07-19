// var http = require("http")
// var fs = require("fs")
// http.createServer((req, res) => {
//     fs.readFile("./view/arttemplate.art", (err, data) => {
//         fs.readdir("./aa", (err, data) => {
//             for (let a = 0; a < data.length; a++) {
//                 let str = "./aa/" + data[a]
//                 fs.stat(str, (err, stats) => {
//                     console.log(str, stats.isFile())
//                     if (stats.isFile() == true) {
//                         res.end(str)
//                     }
//                 })
//             }
//         })
//     })
// }).listen(5000)


// var http = require("http")
// var fs = require("fs")
// var arr = []
// http.createServer((req, res) => {
//     if (req.url == "/favicon.ico") {
//         return
//     }
//     fs.readdir("./aa", (err, data) => {
//         data.forEach((item, index) => {
//             // console.log(item)
//             var str = "./aa/" + item
//             fs.stat(str, (err, stats) => {
//                 // console.log(str, stats.isFile())
//                 if (stats.isFile() == true) {
//                     console.log(str)
//                 }
//             })
//         })
//     })
//    res.end()
// }).listen(5000)