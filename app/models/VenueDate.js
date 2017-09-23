const mongoose = require('mongoose');
const { Schema } = mongoose;

const venueDateSchema = new Schema({
  date: Date,
  startTime: String,
  endTime: String
})

mongoose.model('VenueDate', venueDateSchema);

module.exports = venueDateSchema;



