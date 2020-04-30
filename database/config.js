const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/checkout",
  { useNewUrlParser: true }
);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", () =>
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`)
);

var getAll = () => {
    console.log("getAll was called")
}

var getRelatedContent = () => {
    console.log("getRelatedContent was called")
}
  
module.exports.getAll = getAll;
module.exports.getRelatedContent = getRelatedContent;