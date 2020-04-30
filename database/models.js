const mongoose = require("mongoose");
const config = require("./config.js");
const faker = require("faker");

//SCHEMAS
var gameSchema =  new mongoose.Schema({  
    name: String,
    email: String,
    address: String,
    bio: String,
  });  
  
  var Game = mongoose.model("Game", gameSchema);

  var relatedContent =  new mongoose.Schema({  
    name: String,
    email: String,
    address: String,
    bio: String,
  });  
  
  var Related = mongoose.model("Related", relatedContent);
  
  //METHODS
  let saveInfo = () => {
  for (var i = 0; i < 100; i++) {
    var example = new Game ({
        name: faker.name.findName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        bio: faker.lorem.sentence(),
     })
    example.save(err => { 
      if (err) return console.log(err) });
    }
  }

  let saveRelated = () => {
    for (var i = 0; i < 20; i++) {
      var example = new Related ({
          name: faker.name.findName(),
          email: faker.internet.email(),
          address: faker.address.streetAddress(),
          bio: faker.lorem.sentence(),
       })
      example.save(err => { 
        if (err) return console.log(err) });
      }
    }
  
  let getAll = callback => {
    Game.find({}).exec( (err, res) => {
      if(err){
        console.log("error in getAll")
        throw err;
      } else {
        callback(res);
        console.log("getAll success")
      }
    })
  };
  
  let getRelatedContent = callback => {
    Related.find({}).exec( (err, res) => {
        if(err){
          console.log("error in getRelatedContent")
          throw err;
        } else {
          callback(res);
          console.log("getRelatedContent success")
        }
      })
  };
  
  module.exports.saveInfo = saveInfo;
  module.exports.saveRelated = saveRelated;
  module.exports.getAll = getAll;
  module.exports.getRelatedContent = getRelatedContent;