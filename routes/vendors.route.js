const Vendor = require('../models/vendor');

class VendorRoute {
  retrieveVendors(request, response) {
    Vendor.find({}).then((vendors) => {
      response.send(vendors);
    });
  }
  addVendor(request, response) {
    Vendor.create(request.body).then((vendor) => {
      console.log(vendor);
      response.send('You have added Vendor:\n' + vendor);
    });
  }
  updateVendor(request, response) {
    Vendor.findOneAndUpdate( {_id: request.params.id}, request.body).then(() => {
      Vendor.findOne({_id: request.params.id}).then((vendor) => {
        response.send('Here is your updated vendor:\n' + vendor);
      });
    });
  }
  deleteVendor(request, response) {
    Vendor.findOneAndRemove({_id: request.params.id}).then((vendor) => {
      response.send('You deleted this vendor:\n' + vendor);
    });
  }
}

const vendorRoute = new VendorRoute();
module.exports = vendorRoute;

