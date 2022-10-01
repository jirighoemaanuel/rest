const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  permissionLevel: {
    type: Number,
    required: false,
    default: null,
  },
});

module.exports = mongoose.model('User', userSchema);
