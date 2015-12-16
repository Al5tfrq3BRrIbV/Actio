var express = require("express");
var url = require("url");
var http = require("http");
var app = express();

app.use(express.static(__dirname + "/code"));

app.get("/", function (req,res) {
	res.send("What?");
});

http.createServer(app).listen(8090, '0.0.0.0');
console.log("Now running on port 8090.");
