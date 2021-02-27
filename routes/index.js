var express = require('express');
var router = express.Router();

var loki = require('lokijs');

var db = new loki('data.json', {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 4000
});

// implement the autoloadback referenced in loki constructor
function databaseInitialize() {
  var bookings = db.getCollection("bookings");
  if (bookings === null) {
    bookings = db.addCollection("bookings");
  }
}



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Handle the Form */
router.post('/form', function (req, res, next) {

   

  console.log("req.body");
  console.log(req.body);

  db.getCollection("bookings").insert(req.body);

  let result = db.getCollection("bookings").find();

  result.forEach(function (b) {
    delete b.name;
    delete b.email;
     
  });

  res.json(result);

});




module.exports = router;
