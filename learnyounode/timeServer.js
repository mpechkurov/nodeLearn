var net = require("net");

function timeFormat(t) {
    return t < 10 ? "0" + t : t;
}

var server = net.createServer(function (socket){

    var date = new Date();
    var time = date.getFullYear() + "-" +
               timeFormat(date.getMonth() + 1 ) + "-" +
               timeFormat(date.getDate()) + " " +
               timeFormat(date.getHours()) + ":" +
               timeFormat(date.getMinutes());
    socket.end(time + "\n");
});

server.listen(process.argv[2]);
