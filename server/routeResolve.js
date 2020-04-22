var Flickr = require('flickr-sdk');
var helper = require('./helper.js');
var constants = require('./constants.js');
module.exports = {
    search: async function (req, res) {
        var flickr = new Flickr(process.env.FLICKR_API_KEY);
        var query = helper.getQuery(req.url);
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
            res.send(constants.INVALID_QUERY);
        }
    }
}
