var mongoose = require('mongoose');
require('mongoose-type-email');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose,
}
