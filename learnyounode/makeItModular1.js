var flow = require("./ex_6_flow.js");
var dir = process.argv[2];
var filter = process.argv[3];

flow( dir, filter, function (err, list) {
    if (err) {
        return console.error("Error message = ", err);
    }

    list.forEach(function (element) {
        console.log(element);
    });
});