const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username required.']
  },
  password: {
    type: String,
    required: [true, 'Password required']
  },
  email: {
    type: String,
    required: [true, 'Email required.']
  },
  firstname: {
    type: String,
    required: [true, 'First name required.']
  },
  lastname: {
    type: String,
    required: [true, 'Last name required.']
  }
});

const Vendor = mongoose.model('vendor', VendorSchema);
module.exports = Vendor;