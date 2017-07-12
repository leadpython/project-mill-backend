var crypto = require('crypto');
var collectionName = 'vendors';
var _database;
const sessionDuration = 30000;

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
        if (data.credentials.hash === crypto.pbkdf2Sync(request.body.password, data.credentials.salt, 1000, 64).toString('hex')) {
          // authentication success
          authInfo.isUserAuthenticated = true;

          // generate token 
          authInfo.token = crypto.randomBytes(16).toString('hex');
          authInfo.id = data._id;
          _database.collection(collectionName).updateOne({ "email": request.body.email }, { $set: { 'token': authInfo.token, 'sessionExpiration': (Date.now() + sessionDuration) } });
        }
      }
      // respond with authentication information
      response.status(200).json(authInfo);
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
        let salt = crypto.randomBytes(16).toString('hex');
        let userRecord = {
          email: request.body.email,
          credentials: {
            salt: salt,
            hash: crypto.pbkdf2Sync(request.body.password, salt, 1000, 64).toString('hex')
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
  checkSession(request, response) {
    let isSessionDone = false;
    if (!(request.body.id && requesy.body.token)) {
      response.status(200).json(true);
      return;
    }
    _database.collection(collectionName).findOne({ '_id': request.body.id }, { 'sessionExpiration': true, 'token': true }).then((data) => {
      if (data.token === request.body.token) {
        if (Number(data.sessionExpiration) < Date.now()) {
          isSessionDone = true;
        } else {
          isSessionDone = false;
          // update
          _database.collection(collectionName).updateOne({ '_id': request.body.id }, { $set: { 'sessionExpiration': (Date.now() + sessionDuration) } } );
        }
      }
      response.status(200).json(isSessionDone);
    })
  }
  setDatabase(database) {
    _database = database;
  }
}

const vendorRoute = new VendorRoute();
module.exports = vendorRoute;