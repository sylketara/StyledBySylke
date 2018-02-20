
var mongoose = require('mongoose');

var outfitModel = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  dressCode: String,
  time: String,
  weather: String,
  location: String,
  img: String,
})

module.exports = mongoose.model('outfits', outfitModel);
