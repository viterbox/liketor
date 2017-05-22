
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const db = require('./api/DBs/mongoDb');

const routes = require('./api/routers/liketorRouter');
routes(app);

db.connect();
app.listen(port);

console.log('Liketor RESTful API server started on: ' + port);
