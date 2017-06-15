var express = require('express');
var router = express.Router();

var mongoUtility = require('./../mongoUtilities');
var database = mongoUtility.getDatabase();
const collectionName = 'vendors';

// Routes
var VendorsRoute = require('./vendors.route');

// Vendors Routes
router.get('/vendors', (request, response) => {
    database.collection(collectionName).find({}).toArray((error, data) => {
      if (error) {
        handleError(response, error.message, "Failed to get contacts.");
      } else {
        response.status(200).json(data);
      }
    });
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