var path = require("path");
var express = require("express");
var cors = require('cors');
const mailer = require("./emailSource/sendMail.js");
// var mongoUtil = require('./mongoUtil');
// mongoUtil.connectServer();
var mailchimpUtil = require('./mailchimpUtil.js');

var buildDirectory = path.join(__dirname, "build");
var PORT = 8080;
var app = express();

app.use(cors());
app.options('*', cors());

app.use(express.static(buildDirectory));
app.use(express.json());

app.get("/*", function (req, res) {
    res.redirect('/');
})

app.get("/impactworkshop", function (req, res) {
    res.redirect('https://Communityimpactseries.Eventbrite.com');
})

app.get("/mentalhealthfair", function (req, res) {
    res.redirect('https://www.eventbrite.com/e/mental-health-resource-fair-hosted-by-believe-new-york-tickets-882643539587?aff=oddtdtcreator');
})

app.get("/survey", function (req, res) {
    res.redirect('https://tccolumbia.qualtrics.com/jfe/form/SV_cPhoN9E6m3uUNdI');
})

app.get("/donationform", function (req, res) {
    res.redirect('https://www.zeffy.com/en-US/donation-form/00f36686-7c94-4536-9b01-f6705c56e289');
})

app.get("/getDates", function (req, res) {
    mongoUtil.getDates(req, response);
    function response(result){
        res.json(result);
    }
})

app.get("*", function (req, res) {
    res.sendFile(path.join(buildDirectory, "index.html"));
});

app.post("/getBookings", function (req, res) {
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

app.post("/findOneBooking", function (req, res) {
    mongoUtil.findOneBooking(req.body, response);
    function response(data){
        res.send(data);
    }
})

app.post("/deleteOneBooking", function (req, res) {
    mongoUtil.deleteOneBooking(req.body, response);
    function response(message, deleteCount, data){
        if (deleteCount === 1){
            data.type = "cancellation";
            mailer.sendMail(data);
        }
        res.send(message);
    }
})

app.post("/booking", function (req, res) {
    mongoUtil.postBooking(req.body, response);
    function response(validate, data){
        console.log(JSON.stringify(data));
        if (validate === true){
            mailer.sendMail(data);
            res.send("Your request has been submitted, thank you.");
        }else{
            res.send("We're sorry but your booking could not be completed at this time. Please try again or contact us by phone or email to schedule your appointment.")
        }
    }
})

app.post("/postDates", function (req, res) {
    mongoUtil.postDates(req.body, response);
    function response(data){
        console.log(JSON.stringify(data));
        res.send("done");
    }
})

app.post('/', function (req, res) {
    console.log(JSON.stringify(req.body));
    mailer.sendMail(req.body);
    res.send("success");
});

app.post('/newsletter', function (req, res) {
    console.log(req.body);
    mailchimpUtil.subscribe(req.body, response);
    function response(data) {
            console.log(data);
            res.send(data);
        }
});

app.listen(PORT, () => {
    console.log(`Express server at port: ${PORT}.`);
});

