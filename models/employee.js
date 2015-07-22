var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
  employeeId: { type: String, unique: true, index: true },
  name: String,
  inTime: String,
  outTime: String,
  location: String,
  status: String,
  isIn:  { type: Boolean, default: false }
});

module.exports = mongoose.model('Employee', employeeSchema);
