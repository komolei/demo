var p = require("path");
var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 3434;

var server = http.createServer(function(request, response) {

    var temp = url.parse(request.url, true)
    var path = temp.pathname
    var query = temp.query
    var method = request.method


    // if (path === "/") {
    //     var str = fs.readFileSync("./index.html");
    //     response.setHeader("Content-type", "text/html;charset=utf-8");
    //     response.end(str);
    // } else
    // if (path === "/c.js") {
    //     var str = fs.readFileSync("./c.js");
    //     response.setHeader("Content-type", "charset=utf-8");
    //     response.end(str);


    // } else {
    //     response.statusCode = 404
    //     response.setHeader('Content-Type', 'text/html;charset=utf-8')
    //     response.end('找不到对应的路径，你需要自行修改 index.js')
    // }

    console.log("path", path, "\n");
    try {
        if (path === "/") {
            var str = fs.readFileSync("./index.html");
            // var str = fs.readFile("./index.html", "uft-8", function(err, data) {
            //     // if(data.contentType=="image/png"){
            //     //     data.
            //     // }
            //     fs.readFile('. /img/aa.jpg', 'binary', function(err, file) {
            //         if (err) {
            //             console.log(err);
            //             return;
            //         } else {
            //             http.createServer(function(req, res) {
            //                 res.writeHead(200, { 'Content - Type': 'image/png' });
            //                 res.write(file, 'binary');
            //                 res.end();
            //                 return;
            //             }).listen(8888);
            //         }
            //     });
            // })
            response.setHeader("Content-type", "text/html;charset=utf-8")
            response.end(str)
        } else {
            var filePath = p.join(__dirname, path);
            var string = fs.readFileSync(filePath, "utf-8")
            response.end(string);
            console.log("filePath:", filePath);
        }

    } catch (error) {
        response.statusCode = 404;
        response.end("no response");
        console.log(error);
    }
    // 代码结束，下面不要看
    console.log(method + ' ' + request.url)
})

server.listen(port)
console.log('监听 ' + port + ' 成功， http://localhost:' + port)