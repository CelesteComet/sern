const jwt = require('jsonwebtoken'),  
      crypto = require('crypto'),
      models = require('../models'),
      config = require('../../config/main');

// Login Route

exports.login = function(req, res, next) {

	let userInfo = setUserInfo(req.user);

	res.status(200).json({
		token: 'JWT ' + generateToken(userInfo),
		user: userInfo
	})
}

exports.register = function(req, res) {
	models.User.create(req.body)
		.then((user) => res.status(200).send(user))
		.catch((error) => res.status(400).send(error));
}

function generateToken(user) {
	return jwt.sign(user, config.secret, {
		expiresIn: 10080 // in seconds
	});
}

// Set user info from request
function setUserInfo(request) {
	return {
		id: request.id,
		email: request.email,
		role: request.role
	}
}

