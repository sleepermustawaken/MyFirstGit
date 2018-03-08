var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listPersons', function (req, res) {
       fs.readFile( __dirname + "/" + "persons.json", 'utf8', function (err, data) {
       	console.log( data );
       	res.end( data );
       });
})

var server = app.listen(443, function () {
	console.log("App listening on port 443")
})
