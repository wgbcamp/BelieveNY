var path = require("path");
var express = require("express");
const sgMail = require('@sendgrid/mail');

var buildDirectory = path.join(__dirname, "build");
var PORT = 8080;
var app = express();

app.use(express.static(buildDirectory));

app.get("*", function (req, res){
    res.sendFile(path.join(buildDirectory, "index.html"));
});

app.post('/', function (req, res){
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
    to: 'wbrown@protonmail.com', // Change to your recipient
    from: 'warrengbrn@outlook.com', // Change to your verified sender
    subject: 'Sending at 2:08AM fake again',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent1')
    })
    .catch((error) => {
        console.error(error)
    })
});

app.listen(PORT, () => {
    console.log(`Express server at port: ${PORT}.`);
});
