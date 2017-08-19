
const passport = require('passport');

const resourceName = 'profile';
const resource = require('../controllers/' + resourceName + '.controller');
const requireAuth = passport.authenticate('jwt', { session: false });  

module.exports = function(app) {

  /*
	app.route('/' + resourceName)
		.get(resource.all)
		.post(resource.create);

	app.route('/' + resourceName + '/:id')
		.get(resource.read)
		.patch(resource.update)
		.delete(resource.delete);
	*/

	app.get('/' + resourceName + '/:id', requireAuth, resource.sandbox);

}