const express = require('express');
const app = new express();
const routes = require('./routes/api');

app.use('/api', routes);

app.listen( 3000, () => {
  console.log('App is listening to port ' + 3000);
});