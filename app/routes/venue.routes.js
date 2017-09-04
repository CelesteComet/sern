const venue = require('../controllers/venue.controller');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });  

module.exports = function(app) {
	app.route('/api/venues')
		.get(venue.paginate)
		.post(requireAuth, venue.create);

	app.route('/api/venues/:id')
		.get(venue.read)
		.patch(venue.update)
		.delete(venue.delete);
}