const express = require('express');
const router = express.Router();

router.get('/ninjas', (request, response) => {
  response.send( { type: 'GET' })
})

router.post('/ninjas', (request, response) => {
  response.send( { type: 'POST' })
})

router.put('/ninjas/:id', (request, response) => {
  response.send( { type: 'PUT' })
})

router.delete('/ninjas/:id', (request, response) => {
  response.send( { type: 'POST' })
})

module.exports = router;