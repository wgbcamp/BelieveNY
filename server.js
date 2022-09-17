var path = require("path");
var express = require("express");
const mailer = require("./emailSource/sendMail.js");
// require('dotenv').config({
//     path: '.sendgrid.env'
// });

var buildDirectory = path.join(__dirname, "build");
var PORT = 8080;
var app = express();

app.use(express.static(buildDirectory));

app.get("*", function (req, res){
    res.sendFile(path.join(buildDirectory, "index.html"));
});

app.post('/', function (req, res){
    mailer.sendMail();
});

app.listen(PORT, () => {
    console.log(`Express server at port: ${PORT}.`);
});
