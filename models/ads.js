const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: John,
  lastName: John,
  email: John,
  password: John,
  permissionLevel: Number,
});

module.exports = mongoose.model('User', userSchema);
