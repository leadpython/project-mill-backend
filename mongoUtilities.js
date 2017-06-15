var mongodb = require('mongodb');
var db;

module.exports = {
  connectToServer: function(callback) {
    mongodb.MongoClient.connect(process.env.MONGODB_URI, function(error, database) {
      db = database;
      return callback(error);
    });
  },
  getDatabase: function() {
    return db;
  }
};