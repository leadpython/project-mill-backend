const mongodb = require('mongodb');
var _db;

module.exports = {
  connectToServer: function(callback) {
    mongodb.MongoClient.connect(process.env.MONGODB_URI, function(error, database) {
      _db = database;
      return callback(error);
    });
  },
  getDatabase: function() {
    return _db;
  }
};