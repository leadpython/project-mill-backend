const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name required.']
  },
  username: {
    type: String,
    required: [true, 'Username required.']
  },
  email: {
    type: String,
    required: [true, 'Email required.']
  }
});

const Vendor = mongoose.model('vendor', VendorSchema);

module.exports = Vendor;