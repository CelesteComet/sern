const venue = require('../controllers/venue.controller');

module.exports = function(app) {
	app.route('/api/venues')
		.get(venue.all)
		.post(venue.create);

	app.route('/api/venues/:id')
		.get(venue.read)
		.patch(venue.update)
		.delete(venue.delete);
}