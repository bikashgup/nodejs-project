var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.get('/', function(req, res){
    res.send("hello World");
});

app.listen(5000);
console.log("Server is running in port 3000")
