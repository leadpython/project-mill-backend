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
  password: {
    type: String,
    required: [true, 'Password required']
  },
  email: {
    type: String,
    required: [true, 'Email required.']
  }
});

module.exports = mongoose.model('vendor', VendorSchema);