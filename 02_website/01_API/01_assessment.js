#!/usr/bin/env node

//  Wales EPC API Data Server
//  Author:  Divya Sharma
//  Description:  This Wales EPC server allows users to connect to the Wales EPC Database and return values to explore on a map
//                for Assessment the course.
//  Notes:        This API assumes you have an SQL function called DISTANCE defined which can be created by running the following query in MySQL:

//  CREATE FUNCTION distance(a POINT, b POINT) RETURNS double DETERMINISTIC RETURN ifnull(acos(sin(X(a)) * sin(X(b)) + cos(X(a)) * cos(X(b)) * cos(Y(b) - Y(a))) * 6380, 0)

var moment = require('moment');

var portNumber = 8739;

var mysql = require('mysql');

var d = new Date();

// MySQL Connection Variables
var connection = mysql.createConnection({
  host     : 'dev.spatialdatacapture.org',
  user     : 'ucfnsha',
  password : '19130737',
  database : 'ucfnsha'
});

connection.connect();

//  Setup the Express Server
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

// Provides the static folders we have added in the project to the web server.
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/images'));

// Default API Endpoint - return the index.ejs file in the views folder
app.get('/', function(req, res) {
    return res.render('index');
})

// API Endpoint to return date information
app.get('/date', function(req, res) {
	return res.send(d);
})

// API Endpoint for Top Camera

app.get('/data/walesepc', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-WithD");

	var sql = "SELECT id, price, dateoftransfer, CURRENT_ENERGY_RATING, POTENTIAL_ENERGY_RATING FROM wales_epc LIMIT 1000";

	console.log(sql);

	connection.query(sql, function(err, rows, fields) {
		if (err) console.log("Err:" + err)
		if(rows != undefined){
			res.send(rows);
		}else{
			res.send("something happened.");
		}
	});
});


// Setup the server and print a string to the screen when server is ready
var server = app.listen(portNumber, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});

function mysql_real_escape_string (str) {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return "\\"+char; // prepends a backslash to backslash, percent,
                                  // and double/single quotes
        }
    });
}
