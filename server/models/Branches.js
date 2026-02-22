const mongoose = require('mongoose');
const branchSchema = new mongoose.Schema({
  city: String,
  address: String,
  phone: String,
  hours: String
});

module.exports = mongoose.model('Branches', branchSchema);