var Flickr = require('flickr-sdk');
var express = require('express');
var app = express();
require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
var flickr = new Flickr(process.env.FLICKR_API_KEY);
// todo move this to file
const InvalidQuery = "Invalid Query";
 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// todo move function to file
app.get('/search', async function (req, res) {
  var query = getQuery(req.url);
  var photos = null;
  if(query) {
    try {
      photos = await flickr.photos.search({
        text: `${query}`,
        sort: "relevance"
      });
      photos = photos.body.photos.photo;
      res.send(photos);
    } catch(err) { 
      res.send(err.message);
    }
  } else {
    res.send(InvalidQuery);
  }
});

function getQuery(query) {
 var q = /q=(\w*)/.exec(query);
 if(q.length > 1) {
   return q[1];
 }
 return null;
}

const PORT = process.env.PORT || 8080;
app.listen(PORT);
