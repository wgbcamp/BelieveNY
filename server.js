var path = require("path");
var express = require("express");
const mailer = require("./emailSource/sendMail.js");
var mongoUtil = require('./mongoUtil');
mongoUtil.connectServer();

var buildDirectory = path.join(__dirname, "build");
var PORT = 8080;
var app = express();

app.use(express.static(buildDirectory));
app.use(express.json());

app.get("/", function (req, res){
    res.sendFile(path.join(buildDirectory, "index.html"));
});

app.post("/booking", function (req, res){
    // mongoUtil.getSchedule(response);
    // function response(result){
    //     res.send((result));
    //     console.log(result);
    // }
    console.log(JSON.stringify(req.body));
    mailer.sendMail(req.body);
    res.send("booking successful");
})

app.post('/', function (req, res){
    console.log(JSON.stringify(req.body));
    mailer.sendMail(req.body);
    res.send("success");
});

app.listen(PORT, () => {
    console.log(`Express server at port: ${PORT}.`);
});

