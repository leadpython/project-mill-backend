var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require('mongodb');
var routes = require('./routes/api');
var app = express();

var VendorRoutes = require('./routes/vendors.route');

app.use(bodyParser.json());
app.use('/api', routes);

mongodb.MongoClient.connect(process.env.MONGODB_URI, function(error, database) {
  VendorRoutes.setDatabase(database);
  app.listen(process.env.PORT || 8080, function () {
    console.log("App now running!");
  });
});

