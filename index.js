const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');

mongoose.connect('mongodb://localhost/mill');

app.use(bodyParser.json());
mongoose.Promise = global.Promise;
app.use('/api', routes);
app.use((error, request, response, next) => {
  if (error) {
    response.status(422).send({ error: error.message });
  }
})

app.listen( 3000, () => {
  console.log('App is listening to port ' + 3000);
});