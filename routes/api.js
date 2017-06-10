const express = require('express');
const router = express.Router();

// Models
const Vendor = require('../models/vendor');

// Routes
const VendorsRoute = require('vendors.route');

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
  VendorRoute.deleteVendor(request, response);
});

module.exports = router;