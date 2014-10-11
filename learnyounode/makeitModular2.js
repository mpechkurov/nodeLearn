var fs = require("fs");
var path = require("path");

module.exports = function ( dir_name, extension_name, callback ) {

    fs.readdir( dir_name , function (err, list) {
        if (err) {
            return callback(err);
        }

        var files = [] ;
        list.forEach(function (file) {
            if (path.extname(file) === "."+extension_name )
                files.push(file);
        });

        callback(null, files);
    });
};
