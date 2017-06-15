const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoUtility = require('mongoUtilities');
const routes = require('routes/api');

var app = express();
app.use(bodyParser.json());
app.use('/api', routes);

mongoUtility.connectToServer((error) => {
  app.listen(process.env.PORT || 8080, function () {
    console.log("App now running!");
  });
});
