const keys = require('./keys'),
      mongoose = require('mongoose');

module.exports = () => {

  // Remove deprecation warning.
  mongoose.Promise = global.Promise;

  const db = mongoose.connect(keys.MONGO_URI);

  require('../app/models/User');
  require('../app/models/Profile');
  require('../app/models/Venue');
  require('../app/models/VenueDate');

  return db;
};