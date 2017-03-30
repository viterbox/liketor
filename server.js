
var express = require('express'),
	bodyParser = require('body-parser'),
  	app = express(),
  	port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


var db = require('./db');


var routes = require('./api/routers/liketorRouter');
routes(app);

db.connect();
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);