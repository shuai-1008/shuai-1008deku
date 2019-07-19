function showIndex(req,res){
    res.end("首页")
}
function showAbout(req,res){
    res.end("关于")
}
function showNews(req,res){
    res.end("新闻")
}
function show404(req,res){
    res.end("404")
}
exports.showIndex = showIndex
exports.showAbout = showAbout
exports.showNews = showNews
exports.show404 = show404