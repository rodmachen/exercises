// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var fs = require('fs');
var express = require('express');
var app = express();

var jsonData = {count: 12, message: 'hey'};

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html', function(err) {
		res.status(500).send(err);
	});
});

app.get('/data', function(req, res) {
	res.json(jsonData);
});

app.listen('3000', function() {
	console.log('Example app listening on port 3000!');
});
