const auth = require('../controllers/authentication');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });  
const requireLogin = passport.authenticate('local', { session: false });  

module.exports = function(app) {
	app.route('/register')
		.post(auth.register, auth.login);

	app.route('/login')
		.post(requireLogin, auth.login);

	app.route('/secret')
		.get(requireAuth, function(req, res) {
			res.status(200).send(req.user)
		})
}