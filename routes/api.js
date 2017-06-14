const express = require('express');
const router = express.Router();

// Routes
const VendorsRoute = require('./vendors.route');

router.get('/vendors', (request, response) => {
  VendorsRoute.retrieveVendors(request, response);
});

router.post('/vendors', (request, response) => {
  VendorsRoute.addVendor(request, response);
});

router.put('/vendors/:id', (request, response) => {
  VendorsRoute.updateVendor(request, response);
});

router.delete('/vendors/:id', (request, response) => {
  VendorsRoute.deleteVendor(request, response);
});

module.exports = router;