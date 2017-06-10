const express = require('express');
const router = express.Router();

const Vendor = require('../models/vendor');

router.get('/vendors', (request, response) => {
  response.send( { type: 'GET' });
});

router.post('/vendors', (request, response, next) => {
  Vendor.create(request.body).then((vendor) => {
    response.send(vendor);
  }).catch(next);
});

router.put('/vendors/:id', (request, response) => {
  Vendor.findByIdAndUpdate({_id: request.params.id}, request.body).then(() => {
    Vendor.findOne({_id: request.params.id}).then((vendor) => {
      response.send(vendor);
    });
  });
});

router.delete('/vendors/:id', (request, response) => {
  Vendor.findByIdAndRemove({_id: request.params.id}).then((vendor) => {
    response.send(vendor);
  });
});

module.exports = router;