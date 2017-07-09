var collectionName = 'vendors';
var _database;

class VendorRoute {
  getVendors(request, response) {
    let vendors = _database.collection(collectionName).find({}).toArray((error, data) => {
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
    _database.collection(collectionName).findOne({ "email": request.body.username }).then((data) => {
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
      response.status(200).json(authInfo.isUserAuthenticated);
    }, (error) => {
      response.status(400).json(false);
    });
  }
  registerVendor(request, response) {
    let regInfo = {
      doesUserExist: false,
      registrationSuccess: false
    };
    _database.collection(collectionName).findOne({ "email": request.body.email }).then((data) => {
      response.status(200).json(data);
      if (data) {
        regInfo.doesUserExist = true;
        response.status(200).json(regInfo);
      } else {
        _database.collection(collectionName).insertOne(request.body).then((data) => {
          regInfo.registrationSuccess = true;
          response.status(201).json(regInfo);
        }, (error) => {
          regInfo.registrationSuccess = false;
          response.status(400).json(regInfo);
        });
      }
    }); 
  }
  setDatabase(database) {
    _database = database;
  }
}

const vendorRoute = new VendorRoute();
module.exports = vendorRoute;