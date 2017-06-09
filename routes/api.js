const express = require('express');
const router = express.Router();

const Vendor = require('../models/vendor');

router.get('/vendors', (request, response) => {
  response.send( { type: 'GET' });
});

router.post('/vendors', (request, response) => {
  Vendor.create(request.body).then((vendor) => {
    response.send(vendor);
  });
});

router.put('/vendors/:id', (request, response) => {
  response.send( { type: 'PUT' });
});

router.delete('/vendors/:id', (request, response) => {
  response.send( { type: 'POST' });
});

module.exports = router;