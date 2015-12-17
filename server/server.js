var express = require("express");
var url = require("url");
var http = require("http");
var mysql = require("mysql");
var app = express();

app.use(express.static(__dirname + "/code"));

var sqlconnection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        database: 'ACTIO'
    }
);

app.get("/", function (req, res) {
    res.send("What?");
});


app.get("/request/todo", function (req, res) {
    sqlconnection.query('SELECT * FROM Todos', function (err, rows) {
        if (err) console.log(err);
        res.end(JSON.stringify(rows));
    });
});

app.get("/add/todo", function (req, res) {
    var urlParts = url.parse(req.url, true);
    var query = urlParts.query;

    console.log(query);

    console.log("INSERT INTO Todos VALUES ('" + query.id + "', '"
        + query.text + "', '" + query.priority + "', '" + query.dueDate
        + "', '" + query.done + "', '" + query.user + "');");

    if (query["message"] !== undefined) {
        var tx = {
            message: query["message"],
            type: query["type"],
            deadline: query["deadline"]
        };
        todos.push(tx);
        console.log("Added " + tx.message);
        sqlconnection.query('INSERT INTO Todos ')
    }
    else {
        res.end("Error: missing message parameter");
    }
});

http.createServer(app).listen(8090, '0.0.0.0');

console.log("Now running on port 8090.");