const express = require('express');
const app = new express();

app.get('/api', (request, response) => {
  response.send({ name: 'Jeff' });
})

app.listen( 3000, () => {
  console.log('App is listening to port ' + 3000);
});