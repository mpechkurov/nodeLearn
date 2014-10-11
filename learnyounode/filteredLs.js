var fs = require("fs");
var pa = require("path");

var extension = "."+process.argv[3];

fs.readdir(process.argv[2], function (err, list){
    if (err) {
        throw err;
    }
    for(var i = 0; i < list.length; i++ ){
        if (pa.extname(list[i]) == extension ){
            console.log(list[i]);
        }
    }
});
