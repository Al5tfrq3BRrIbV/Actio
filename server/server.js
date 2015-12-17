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
    var query = url.parse(req.url, true).query;

    if(query.id !== undefined){
        sqlconnection.query("INSERT INTO Todos VALUES ('" + query.id + "', '"
            + query.text + "', '" + query.priority + "', '" + query.dueDate
            + "', '" + query.done + "', '" + query.user + "', '" + query.category + "');");
    }
    else {
        res.end("Error: missing message parameter");
    }
});

app.get("/update/todo", function (req, res) {
    var query = url.parse(req.url, true).query;

    if(query.id !== undefined){
        sqlconnection.query("UPDATE Todos SET "
            + "text='" + query.text + "', priority='" + query.priority + "', date='" + query.dueDate + "', done='"
            + query.done + "', user='" + query.user + "', category='" + query.category
            + "' WHERE " + "id='" + query.id + "';");
    }
    else {
        res.end("Error: missing message parameter");
    }
});

app.get("/delete/todo", function (req, res) {
    var query = url.parse(req.url, true).query;

    if(query.id !== undefined){
        sqlconnection.query("DELETE FROM Todos WHERE id='" + query.id + "';");
    }
    else {
        res.end("Error: missing message parameter");
    }
})

http.createServer(app).listen(8090, '0.0.0.0');

console.log("Now running on port 8090.");