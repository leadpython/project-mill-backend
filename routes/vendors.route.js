var crypto = require('crypto');
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
    _database.collection(collectionName).findOne({ "email": request.body.email }).then((data) => {
      // Check if user exists
      if (data) {
        // user exists, proceed to authentication
        authInfo.doesUserExist = true;
        if (data.credentials.hash === crypto.pbkdf2Sync(request.body.password, this.salt, 1000, 64).toString('hex')) {
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
      if (data) {
        regInfo.doesUserExist = true;
        response.status(200).json(regInfo);
      } else {
        let userRecord = {
          email: request.body.email,
          credentials: {
            hash: this.salt = crypto.randomBytes(16).toString('hex'),
            salt: crypto.pbkdf2Sync(request.body.password, this.salt, 1000, 64).toString('hex')
          },
          firstname: request.body.firstname,
          lastname: request.body.lastname
        };
        _database.collection(collectionName).insertOne(userRecord).then((data) => {
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