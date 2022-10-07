var dataService = require('./data-service'); // require data-service file 

var express = require('express'); // Express web server framework
var app = express();

app.use(express.static('public')); // sets up the static middleware

var HTTP_PORT = process.env.PORT || 8080;

// the server is listening on process.env.PORT || 8080
app.listen(process.env.PORT || 8080, function() {
  console.log('Express http server listening on port ' + (process.env.PORT || 8080));
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/home.html');
});

// this defines a "route":
app.get('/test1', function(req, res) {
  res.sendFile(__dirname + '/views/test1.html.html');
});
