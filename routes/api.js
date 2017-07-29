var express = require('express');
var router = express.Router();

// Routes
var VendorsRoute = require('./vendors.route.js');

// Vendors Routes
router.get('/vendors', (request, response) => {
  VendorsRoute.getVendors(request, response);
});

router.get('/vendors/searchVendors/:input', (request, response) => {
  VendorsRoute.searchVendors(request, response);
});


router.get('/vendors/get-services/:id', (request, response) => {
  VendorsRoute.getVendorServices(request, response);
});

router.get('/vendors/get-appointments/:id', (request, response) => {
  VendorsRoute.getVendorAppointments(request, response);
});

router.post('/vendors/add-service', (request, response) => {
  VendorsRoute.addServiceToVendor(request, response);
});

router.post('/vendors/register', (request, response) => {
  VendorsRoute.registerVendor(request, response);
});

router.put('/vendors/login', (request, response) => {
  VendorsRoute.authenticateVendor(request, response);
});

router.put('/vendors/check-session', (request, response) => {
  VendorsRoute.checkSession(request, response);
});

router.put('/vendors/:id', (request, response) => {
  VendorsRoute.updateVendor(request, response);
});

module.exports = router;