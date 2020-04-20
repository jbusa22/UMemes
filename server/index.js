var Flickr = require('flickr-sdk');
var Jimp = require('jimp');
var express = require('express');
var app = express();
var path = require('path');
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
      // const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
      // res.type('jpg');
      // res.attachment('output.jpg');
      // Jimp.read('lenna.png', (err, lenna) => {
      //     if (err) throw err; 
      //     lenna.resize(256, 256) // resize
      //     .print(font, 10, 10, 'Hello World!')
      //     .quality(60) // set JPEG quality
      //     .greyscale() // set greyscale
      //     .write('output.jpg'); // save
      // });
      // res.download("output.jpg");
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
if (process.env.NODE_ENV === 'production') {
  console.log(__dirname);
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
