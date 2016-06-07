var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.render('index')
});

var server = app.listen(port, function() {
	var host = server.address().address;
	var x = server.address().port;

	console.log('Wedding Site is running on localhost', host, x);
});

app.set('view engine', 'pug');
app.set('views', './src/pug');
app.use(express.static('dist'))