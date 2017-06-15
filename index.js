var express = require("express");
var bodyParser = require("body-parser");
var mongoUtility = require('./mongoUtilities');
var routes = require('./routes/api');
var app = express();

app.use(bodyParser.json());
app.use('/api', routes);

mongoUtility.connectToServer((error) => {
  app.listen(process.env.PORT || 8080, function () {
    console.log("App now running!");
  });
});
