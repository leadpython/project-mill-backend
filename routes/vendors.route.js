var collectionName = 'vendors';
var _database;

class VendorRoute {
  getVendors(request, response) {
    _database.collection(collectionName).find({}).toArray((error, data) => {
      if (error) {
        handleError(response, error.message, "Failed to get vendors.");
      } else {
        response.status(200).json(data);
      }
    });
  }
  addVendor(request, response) {
    response.send(JSON.stringify(request));
    _database.collection(collectionName).insertOne(request.body, function(error, data) {
      if (error) {
        handleError(response, error.message, "Failed to create new vendor.");
      } else {
        // response.status(201).json(data);
      }
    });
  }
  updateVendor(request, response) {
  }
  deleteVendor(request, response) {
  }
  setDatabase(database) {
    _database = database;
  }
}

const vendorRoute = new VendorRoute();
module.exports = vendorRoute;

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}