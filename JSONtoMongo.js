'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    MongoClient = require('mongodb').MongoClient;


/* Connect to your database. */
MongoClient.connect(config.db.uri, function(err, db){
  if(!err){
    console.log("We are connected");
  }

  var collection = db.collection('listings');
  /* 
    Instantiate a mongoose model for each listing object in the JSON file, 
    and then save it to your Mongo database 
   */

  //create new listings

  //Just using these listings to test to make sure it works. 
  var newListing1 = {
    code: 'MIC',
    name: 'Mickey Mouse',
    //not sure if this is the right way to do the coordinates
    coordinates: [{ latitude: 4325, longitude: 65234}], 
    address: 'Magic Kingdom'
  };

  var newListing2 = {
    code: 'DON',
    name: 'Donald Duck',
    //not sure if this is the right way to do the coordinates
    coordinates: [{ latitude: 74365, longitude: 76543}], 
    address: 'Epcot'
  };

  //insert new listings
  collection.insert([newListing1, newListing2], function(err, result){
    if(err){
      console.log(err);
    }
    else{
      console.log('Inserted into the collection!');
    }
  });




  /*newListing.save(function(err){
    if(err) throw err;

    console.log('Listing created!');
  });*/


  //db.close();
});

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */