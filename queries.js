/* Add all the required libraries*/

/* Connect to your database using mongoose - remember to keep your key secret*/

/*
FOUND THIS CODE AT : 
https://github.com/typeorm/mongo-typescript-example/issues/1
*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');


mongoose.connect(config.db.uri,{ useNewUrlParser: true } , { useUnifiedTopology: true });

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
 s   then log it to the console. 
   */

Listing.find({ code: 'LBW' }, function(err, docs) {
  if (err) throw err;

  // object of the user
  console.log(docs);
  return docs;
});


};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
// find the user with id 4
Listing.findOneAndRemove({code: 'CABL'  }, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('Item deleted!');
});


   
};

var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */

Listing.findOneAndUpdate({name: 'Phelps Lab' }, { address: '1953 Museum Rd, Gainesville, FL 32603' }, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});
};


var retrieveAllListings = function() {

Listing.find({}, function(err, docs) {
  if (err) throw err;

  // object of all the users

  console.log(JSON.stringify(docs, null, 1));

});

};


findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
