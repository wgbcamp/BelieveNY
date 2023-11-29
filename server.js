var path = require("path");
var express = require("express");
var cors = require('cors');
const mailer = require("./emailSource/sendMail.js");
var mongoUtil = require('./mongoUtil');
mongoUtil.connectServer();

var buildDirectory = path.join(__dirname, "build");
var PORT = 8080;
var app = express();

app.use(cors());
app.options('*', cors());

app.use(express.static(buildDirectory));
app.use(express.json());

app.get("*", function (req, res){
    res.sendFile(path.join(buildDirectory, "index.html"));
});

app.post("/getBookings", function (req, res){
    mongoUtil.getSchedule(req.body, response);
    console.log(req.body);
    function response(result){
        res.json((result));
        var test = [];
        test.push(result);
        console.log("###")
        console.log(test);
    }
})

app.post("/findOneBooking", function (req, res){
    mongoUtil.findOneBooking(req.body, response);
    function response(data){
        res.send(data);
    }
})

app.post("/deleteOneBooking", function (req, res){
    mongoUtil.deleteOneBooking(req.body, response);
    function response(message, deleteCount, data){
        if (deleteCount === 1){
            data.type = "cancellation";
            mailer.sendMail(data);
        }
        res.send(message);
    }
})

app.post("/booking", function (req, res){

    mongoUtil.postBooking(req.body, response);
    function response(validate, data){
        console.log(JSON.stringify(data));
        if (validate === true){
            mailer.sendMail(data);
            res.send("booking successful");
        }else{
            res.send("We're sorry but your booking could not be completed at this time. Please try again or contact us by phone or email to schedule your appointment.")
        }

    }

})

app.post('/', function (req, res){
    console.log(JSON.stringify(req.body));
    mailer.sendMail(req.body);
    res.send("success");
});

app.listen(PORT, () => {
    console.log(`Express server at port: ${PORT}.`);
});

