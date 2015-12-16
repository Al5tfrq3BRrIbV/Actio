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
		password 	: '',
		database	: 'ACTIO'
	}
);

http.createServer(app).listen(2683);

app.get("/", function (req,res) {
	res.send("What?");
})

app.get("/request/todos", function (req, res) {
	sqlconnection.query('SELECT * FROM Todos', function (err, rows) {
		if(err) console.log(err);
		res.end(JSON.stringify(rows));
	});
});
