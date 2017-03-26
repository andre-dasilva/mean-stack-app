var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var veryCoolJson = {
    name: "André da Silva",
    email: "andi.dasilva@hotmail.com",
    date: new Date()
};

app.get("/", function(req, res) {
    res.send("Hello World");
});

app.get("/json", function(req, res) {
    res.json(veryCoolJson);
});

app.post('/login', urlencodedParser, function (req, res) {
    console.log(req.body);
    if (!req.body) return res.sendStatus(400);
    res.send('welcome, ' + req.body.username)
});


app.listen(4000, function() {
    console.log("App running on port 400");
});