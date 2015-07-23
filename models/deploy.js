var mongoose = require('mongoose');

var deploySchema = new mongoose.Schema({
  deployId: { type: String, unique: true, index: true },
  appName: String,
  environment: String,
  user: String,
  time: String,
  status: String
});

module.exports = mongoose.model('Deploy', deploySchema);
