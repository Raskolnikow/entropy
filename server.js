var express = require('express');

var app = new express();

//app.get('/', function(req, res) {
//	res.sendFile(__dirname + '/client/app/index.html');
//});


app.use(express.static('client/code'));
app.use(express.static('client/code/app'));
app.use(express.static('client/code/lib'));
app.use(express.static('client/media/graphics'));


app.listen(3000, function() {
	console.log("server up and running..");
});