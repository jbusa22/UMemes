var express = require('express');
var app = express();
var path = require('path');
var routeResolve = require('./routeResolve.js');
require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/search', routeResolve.search);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../umemes-client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../umemes-client/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log("working on port " + PORT);
