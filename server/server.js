var express = require("express");
var url = require("url");
var http = require("http");
var mysql = require("mysql");
var app = express();

app.use(express.static(__dirname + "/code"));

var sqlconnection = mysql.createConnection(
	{
		host		: 'localhost',
		user	 	: 'root',
		database	: 'ACTIO'
	}
);

app.get("/", function (req,res) {
	res.send("What?");
});


app.get("/request/todos", function (req, res) {
	sqlconnection.query('SELECT * FROM Todos', function (err, rows) {
		if(err) console.log(err);
		res.end(JSON.stringify(rows));
	});
});

http.createServer(app).listen(8090, '0.0.0.0');

console.log("Now running on port 8090.");