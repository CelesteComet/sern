const mongoose = require('mongoose');
const { Schema } = mongoose;

const venueDateSchema = require('./VenueDate');
const eventBlurbSchema = require('./EventBlurb');

const venueSchema = new Schema({
	title: String,
	location: String,
  geolocation: Object,
  description: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dates: [venueDateSchema],
  blurbs: [eventBlurbSchema],
  images: [String]
});

mongoose.model('Venue', venueSchema);


