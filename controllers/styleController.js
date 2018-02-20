var Outfit = require("../models/outfitModel");

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

  getAddfuture: function(req, res){
    res.render('addfuture',{status: false});
  },

  postNewOutfit: function(req, res){

    // Create a new object from the model...
    var newOutfit = new Outfit(req.body);
    console.log(newOutfit)
    // ...and save it to the DB
    newOutfit.save(function(err, newOutfit){
      if(err){ return res.status(500).render('admin' ); };
      res.status(201).render('admin');
    });
  },

  getResults: function(req, res){
    Outfit.find(function(err, outfits){
      if(err){ return res.status(500).send('Error!') };
      res.render('results',{
        outfits:outfits
      });
    })
  }

};





module.exports = styleController;
