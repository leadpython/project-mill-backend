var express = require('express');
var router = express.Router();

// Routes
var VendorsRoute = require('./vendors.route.js');

// Vendors Routes
router.get('/vendors', (request, response) => {
  VendorsRoute.getVendors(request, response);
});

router.post('/vendors/login', (request, response) => {
  VendorsRoute.authenticateVendor(request, response);
})

router.post('/vendors/register', (request, response) => {
  VendorsRoute.registerVendor(request, response);
})

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