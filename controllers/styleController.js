var Outfit = require("../models/outfitModel");
const locationService= require('../services/locationService')

var styleController = {
  getProfile: function(req, res){
  Outfit.find(function(err, outfits){
      if(err){ return res.status(500).send('Error!') };
      // ...and render the view with that data
      res.render('profile', {
        outfits: outfits
      });
    })
  },

  getWelcome: function(req, res){
    Outfit.find(function(err, outfits){
      if(err){ return res.status(500).send('Error!') };
      res.render('welcome',{
        outfits:outfits
      });
    })
  },

  match: function(req, res){
    res.render('match',{status: false});
  },

  postNewOutfit: function(req, res){

    // Create a new object from the model...
    var newOutfit = new Outfit(req.body);
    // ...and save it to the DB
    newOutfit.save(function(err, newOutfit){
      if(err){ return res.status(500).render('admin' ); };
      res.status(201).render('admin');
    });
  },

  getResults: function(req, res){
    console.log(req.body)
    Outfit.findOne({
      dressCode: req.body.dressCode,
      time: req.body.time,
      weather: req.body.weather,
      location: req.body.location
    }, function (err, result){
      if(err){ return res.status(500).render('match' ); };
      if(result<1){
        locationService(function(err,response){
          if(err){ return res.status(500).render('match' ); };
          res.render('nomatch',{response:response});
        })
      } else{
        res.render('results',{result:result})
      }

    });
  }

};





module.exports = styleController;
