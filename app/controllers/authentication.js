const jwt = require('jsonwebtoken');
const { db } = require('../../index');
const config = require('../../config/main');
console.log(config);
const models = db.models;

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
		.then(user => {
			var profile = models.Profile.create({
				company_name: "Your Company Name",
				type: "Your Performance Type",
				UserId: user.id
			}).then(profile => {
				res.send(user);
			})
		})
//		.then((user) => res.status(200).send(user))
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

