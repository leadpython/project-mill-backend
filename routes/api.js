var express = require('express');
var router = express.Router();
var database = router._database;

// Routes
var VendorsRoute = require('./vendors.route.js');

// Vendors Routes
router.get('/vendors', (request, response) => {
  VendorsRoute.getVendors(request, response, database);
});

router.post('/vendors', (request, response) => {
  VendorsRoute.addVendor(request, response, database);
});

router.put('/vendors/:id', (request, response) => {
  VendorsRoute.updateVendor(request, response, database);
});

router.delete('/vendors/:id', (request, response) => {
  VendorsRoute.deleteVendor(request, response, database);
});

module.exports = router;