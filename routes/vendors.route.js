var collectionName = 'vendors';
var _database;

class VendorRoute {
  getVendors(request, response) {
    _database.collection(collectionName).find({}).toArray((data) => {
      response.status(200).json(data);
    });
  }
  updateVendor(request, response) {
  }
  deleteVendor(request, response) {
  }
  authenticateVendor(request, response) {
    // collects information regarding authentication
    let authInfo = {
      doesUserExist: false,
      isUserAuthenticated: false,
    };
    _database.collection(collectionName).findOne({ "username": request.body.username }).then((data) => {
      // Check if user exists
      if (data) {
        // user exists, proceed to authentication
        authInfo.doesUserExist = true;
        if (data.password === request.body.password) {
          // authentication success
          authInfo.isUserAuthenticated = true;
        }
      }
      // respond with authentication information
      response.status(200).json(authInfo);
    });
  }
  registerVendor(request, response) {
    _database.collection(collectionName).insertOne(request.body).then((data) => {
      response.status(201).json(data.ops[0]);
    });
  }
  setDatabase(database) {
    _database = database;
  }
}

const vendorRoute = new VendorRoute();
module.exports = vendorRoute;