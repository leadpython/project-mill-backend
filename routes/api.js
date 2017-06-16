var express = require('express');
var router = express.Router();

// Routes
var VendorsRoute = require('./vendors.route.js');

// Vendors Routes
router.get('/vendors', (request, response) => {
  VendorsRoute.getVendors(request, response, router._database);
});

router.post('/vendors', (request, response) => {
  VendorsRoute.addVendor(request, response, router._database);
});

router.put('/vendors/:id', (request, response) => {
  VendorsRoute.updateVendor(request, response, router._database);
});

router.delete('/vendors/:id', (request, response) => {
  VendorsRoute.deleteVendor(request, response, router._database);
});

module.exports = router;