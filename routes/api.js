const express = require('express');
const router = express.Router();

router.get('/vendors', (request, response) => {
  response.send( { type: 'GET' });
})

router.post('/vendors', (request, response) => {
  console.log(request.body);
  response.send( { type: 'POST', body: request.body });
})

router.put('/vendors/:id', (request, response) => {
  response.send( { type: 'PUT' });
})

router.delete('/vendors/:id', (request, response) => {
  response.send( { type: 'POST' });
})

module.exports = router;