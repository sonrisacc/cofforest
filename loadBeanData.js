var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beandb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log( "we're connected!");

});


var BeanSchema = mongoose.Schema({
    name: String,
    region: String,
    description: String
});




var Bean = mongoose.model('Bean', BeanSchema);


var Kenya = new Bean({
  name: 'Kenya',
    region: 'Indonesia',
    description: 'Dark roast'

});


Kenya.save(function(err, result) {
  if(err){console.log(err)};
  console.log("yeah", result);
});


var sumatra = new Bean({
  name: 'Sumatra',
    region: 'Indonesia',
    description: 'Dark roast'

});


sumatra.save(function(err, result) {
  if(err){console.log(err)};
  console.log("yeah", result);
});

var costaRica= new Bean({
 name: 'Costa Rica',
    region: 'Costa Rica',
    description: 'Dark roast'

});


costaRica.save(function(err, result) {
  if(err){console.log(err)};
  console.log("yeah", result);
});

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/beandb";

// MongoClient.connect(url, function(err,db) {
//   if(err) throw err;
//   console.log("Cofforest created!!");
//   db.close();

// });