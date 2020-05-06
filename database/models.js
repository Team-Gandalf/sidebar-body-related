const mongoose = require('mongoose');
const config = require('./config.js');

// SCHEMAS
const gameSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  url: String,
  mainbody: {
    description: String,
    images: Array,
    maturecontent: Array,
    sysrequirement: {
      os: Array,
      processor: String,
      memory: String,
      graphics: String,
    }
  },
  sidebar: {
    description: [String],
    vrsupport: [String],
    languages: Object,
    achievements: [String],
    metacritic: Number,
    minidescription: {
      genre: Array,
      developer: String,
      publisher: String, 
      franchise: String,
      releasedate: String
    },
  },
});

const Game = mongoose.model('Game', gameSchema);

const relatedContent = new mongoose.Schema({
  name: String,
      thumbnail : String,
      price: String,
      hoverinfo: {
        releasedate: String,
        gif: String, 
        reviews: String, 
        totalReviews: Number,
        tag: Array
  }
});

const Related = mongoose.model('Related', relatedContent);

// METHODS
const getAll = (callback) => {
  Game.find({}).exec((err, res) => {
    if (err) {
      console.log('error in getAll');
      throw err;
    } else {
      callback(res);
      console.log('getAll success');
    }
  });
};

const getOne = (query, callback) => {
  Game.find({_id: query._id}).exec((err, res) => {
    if (err) {
      console.log('error in getOne');
      throw err;
    } else {
      callback(null, res);
      // console.log(res);
      console.log('getOne success');
    }
  });
};

const getRelatedContent = (callback) => {
  Related.find({}).exec((err, res) => {
    if (err) {
      console.log('error in getRelatedContent');
      throw err;
    } else {
      callback(res);
      console.log('getRelatedContent success');
    }
  });
};


module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.getRelatedContent = getRelatedContent;
module.exports.Related = Related;
module.exports.Game = Game;
