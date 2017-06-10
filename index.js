const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');

mongoose.connect('mongodb://ds119682.mlab.com:19682/heroku_jw9t8spw');

app.use(bodyParser.json());
mongoose.Promise = global.Promise;
app.use('/api', routes);

app.listen(process.env.port || 3000, () => {
  console.log('App is listening to port ' + process.env.port || 3000);
});