class VendorRoute {
  collectionName = 'vendors';
  getVendors(request, response, database) {
    database.collection(this.collectionName).find({}).toArray((error, data) => {
      if (error) {
        handleError(response, error.message, "Failed to get vendors.");
      } else {
        response.status(200).json(data);
      }
    });
  }
  addVendor(request, response) {
    database.collection(this.collectionName).insertOne(request.body, function(error, data) {
      if (error) {
        handleError(response, error.message, "Failed to create new vendor.");
      } else {
        response.status(201).json(data.ops[0]);
      }
    });
  }
  updateVendor(request, response, database) {
  }
  deleteVendor(request, response, database) {
  }
}

const vendorRoute = new VendorRoute();
module.exports = vendorRoute;

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}