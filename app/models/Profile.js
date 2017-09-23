const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
	companyName: String,
	performanceType: String,
	email: String,
	address: String,
	phoneNumber: String 
})

mongoose.model('Profile', profileSchema);



