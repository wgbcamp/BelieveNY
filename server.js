var path = require("path");
var express = require("express");

var buildDirectory = path.join(__dirname, "build");
var PORT = 3000;
var app = express();

app.use(express.static(buildDirectory));

app.get("*", function (req, res){
    res.sendFile(path.join(buildDirectory, "index.html"));
});

app.listen(PORT);
console.log(`Express server is listening on port ${PORT}.`);