var mongoUtility = require('./../mongoUtilities');
var database = mongoUtility.getDatabase();
const collectionName = 'vendors';

const vendorRoute = {
  retrieveVendors: (request, response) => {
    database.collection(collectionName).find({}).toArray((error, data) => {
      if (error) {
        handleError(response, error.message, "Failed to get contacts.");
      } else {
        response.status(200).json(data);
      }
    });
  },
  addVendor: (request, response) => {
    database.collection(collectionName).insertOne(request.body, function(error, data) {
      if (error) {
        handleError(response, error.message, "Failed to create new contact.");
      } else {
        response.status(201).json(data.ops[0]);
      }
    });
  },
  updateVendor: (request, response) => {
  },
  deleteVendor: (request, response) => {
  }
}

module.exports = vendorRoute;

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}