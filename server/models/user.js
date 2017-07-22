var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    required: true,
    trim: true,
    type: mongoose.SchemaTypes.Email,
    minlength: 1
  }
});

module.exports = {
  User
};
