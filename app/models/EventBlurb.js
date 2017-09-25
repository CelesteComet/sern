const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventBlurbSchema = new Schema({
  heading: String,
  content: String
})

mongoose.model('EventBlurb', eventBlurbSchema);

module.exports = eventBlurbSchema;



