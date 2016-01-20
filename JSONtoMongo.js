'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
    
/* Connect to your database. DONE*/
  mongoose.connect(config.db.uri);

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log("Connected!");

      /* 
        Instantiate a mongoose model for each listing object in the JSON file, 
        and then save it to your Mongo database. DONE 
       */

    var listingsToAdd = JSON.parse(fs.readFileSync('./listings.json', 'utf8')).entries;
    var callback = function(err){
      if(err) throw err;
    }

    for(var i = 0; i < listingsToAdd.length; i++){
        new Listing(listingsToAdd[i]).save(callback);
    }

    console.log('Listings added.');

  });
    
/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. DONE
 */