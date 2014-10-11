var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res){
    if  (req.method != 'GET')
        return res.end("Send me a GET\n");

    res.writeHead(200, {"Content-Type": "text/plain"});

    var data = url.parse(req.url, true);
    var d = new Date(data.query.iso);

    if (data.pathname === "/api/parsetime"){
        var re = {
            "hour": d.getHours(),
            "minute": d.getMinutes(),
            "second": d.getSeconds()
        };
        res.end(JSON.stringify(re));
    } else {
        var re2 = {"unixtime":d.getTime()};
        res.end(JSON.stringify(re2));
    }
});

server.listen(process.argv[2]);
