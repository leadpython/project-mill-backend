var express = require('express');
var router = express.Router();

// Routes
var VendorsRoute = require('./vendors.route.js');

router.all('/', function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

// Vendors Routes
router.get('/vendors', (request, response) => {
  VendorsRoute.getVendors(request, response);
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