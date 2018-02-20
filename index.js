var express = require('express');
var path = require("path");
var app = express();
var mongoose = require("mongoose");
var styleController = require("./controllers/styleController");
var bodyParser = require('body-parser');

var mongoUrl = process.env.MONGODB_URI;
mongoose.connect(mongoUrl, function(err){
  if(err) return console.log(err);
  console.log("DB connection open!");
});


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  res.render("welcome")
});

app.get('/admin', function(req, res){
  res.render('admin')
})

app.get('/addfuture', styleController.getAddfuture)

app.get('/profile', styleController.getProfile)

app.get('/results', styleController.getResults)
app.post("/add-new-outfit", styleController.postNewOutfit)



app.listen(3004, function() {
  console.log('server running');
});
