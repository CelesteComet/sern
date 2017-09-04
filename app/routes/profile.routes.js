const passport = require('passport');
const resourceName = 'profile';
const resource = require('../controllers/' + resourceName + '.controller');

const requireAuth = passport.authenticate('jwt', { session: false });  

module.exports = function(app) {

  
	app.route('/api/' + resourceName)
		.get(resource.all)
		.post(resource.create);

	app.route('/api/' + resourceName + '/:id')
		.get(requireAuth, resource.read)
		.patch(resource.update)
		.delete(resource.delete);
	
}