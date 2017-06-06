var http = require("http");
var b = function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html', 'name': 'komolei' })
    res.write("komo")
    res.end();
}
var text = require("./text");
console.log("\n", "md")
text.printTime();
var server = http.createServer(b);
server.listen(1111, "127.0.0.1");
console.log("run port 1111");