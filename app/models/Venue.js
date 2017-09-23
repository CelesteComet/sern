const mongoose = require('mongoose');
const { Schema } = mongoose;

const venueDateSchema = require('./VenueDate');

const venueSchema = new Schema({
	title: String,
	location: String,
  geolocation: Object,
  description: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dates: [venueDateSchema],
  images: [String]
});

mongoose.model('Venue', venueSchema);


