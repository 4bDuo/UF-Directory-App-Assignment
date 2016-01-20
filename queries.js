/* Fill out these functions using Mongoose queries. DONE*/
var Listing = require('./ListingSchema.js'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    config = require('./config');

mongoose.connect(config.db.uri);

var findLibraryWest = function(){
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. DONE
   */
    
    Listing.find({name:'Library West'}, function(err, listing){
      if(err) throw err;
      console.log('');
      console.log('Found Library West:');
      console.log(listing);
    });   
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. DONE
   */
  Listing.findOneAndRemove({code: 'CABL'}, function(err, listing){
    if(err) throw err;

      console.log('');
      console.log('CABL listing removed');
  });
};

var updatePhelpsMemorial = function() {
  Listing.findOne({name:'Phelps Laboratory'}, function(err, listing){
      if(err) throw err;

      listing.address = '102 Phelps Lab, Gainesville, FL 32611';
      listing.save();

      console.log('');
      console.log('Updated Phelps Address:');
      console.log(listing);  
  });  
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. DONE 
   */
  Listing.find({}, function(err, listings){
    if(err) throw err;
    
    console.log('');
    console.log('All of the Listings:');
    console.log(listings); 
  });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();