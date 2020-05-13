const mongoose = require('mongoose');
const config = require('./config.js');

// SCHEMAS
const gameSchema = new mongoose.Schema({
  proxyId: Number,
  name: { type: String, unique: true },
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
    },
  },
  sidebar: {
    description: Object,
    vrsupport: Object,
    languages: Object,
    achievements: Array,
    metacritic: Number,
    minidescription: {
      genre: Array,
      developer: String,
      publisher: String,
      franchise: String,
      releasedate: String,
    },
  },
  relatedContent: [
    {
      name: String,
      thumbnail: String,
      price: String,
      hoverinfo: {
        releasedate: String,
        gif: String,
        reviews: String,
        totalReviews: Number,
        tag: Array,
      },
    },
    {
      name: String,
      thumbnail: String,
      price: String,
      hoverinfo: {
        releasedate: String,
        gif: String,
        reviews: String,
        totalReviews: Number,
        tag: Array,
      },
    },
    {
      name: String,
      thumbnail: String,
      price: String,
      hoverinfo: {
        releasedate: String,
        gif: String,
        reviews: String,
        totalReviews: Number,
        tag: Array,
      },
    },
    {
      name: String,
      thumbnail: String,
      price: String,
      hoverinfo: {
        releasedate: String,
        gif: String,
        reviews: String,
        totalReviews: Number,
        tag: Array,
      },
    },
    {
      name: String,
      thumbnail: String,
      price: String,
      hoverinfo: {
        releasedate: String,
        gif: String,
        reviews: String,
        totalReviews: Number,
        tag: Array,
      },
    },
  ],
});

const Game = mongoose.model('Game', gameSchema);

// const relatedContent = new mongoose.Schema({
//   name: String,
//       thumbnail : String,
//       price: String,
//       hoverinfo: {
//         releasedate: String,
//         gif: String,
//         reviews: String,
//         totalReviews: Number,
//         tag: Array
//   }
// });

// const Related = mongoose.model('Related', relatedContent);

// METHODS
const getOne = (query, callback) => {
  Game.find({ proxyId: query }).exec((err, res) => {
    if (err) {
      // console.log("error in getOne");
      throw err;
    } else {
      callback(null, res);
      // console.log(res);
      // console.log("getOne success");
    }
  });
};

const getRelatedContent = () => {
  // Related.find({}).exec((err, res) => {
  //   if (err) {
  //     console.log("error in getRelatedContent");
  //     throw err;
  //   } else {
  //     callback(null, res);
  //     console.log("getRelatedContent success");
  //   }
  // });
};

module.exports.getOne = getOne;
module.exports.getRelatedContent = getRelatedContent;
// module.exports.Related = Related;
module.exports.Game = Game;
