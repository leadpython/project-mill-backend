var express = require('express');
var router = express.Router();

// Routes
var VendorsRoute = require('./vendors.route');

// Vendors Routes
router.get('/vendors', (request, response) => {
  response.send("HELLO WORLD!");
  // VendorsRoute.retrieveVendors(request, response);
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