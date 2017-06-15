const mongodb = require('mongodb');
var _db;

module.exports = {
  connectToServer: function(callback) {
    mongodb.MongoClient.connect(process.env.MONGODB_URI || 3000, function( error, database ) {
      _db = db;
      return callback(error);
    });
  },
  getDatabase: function() {
    return _db;
  }
};