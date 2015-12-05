var express = require('express');

var app = new express();

//app.get('/', function(req, res) {
//	res.sendFile(__dirname + '/client/app/index.html');
//});

console.log(__dirname + '../client/app');

app.use(express.static('../' + __dirname + 'client/app'));
app.use(express.static('../' + __dirname + 'client/media/graphics'));


app.listen(3000, function() {
	console.log("server up and running..");
});