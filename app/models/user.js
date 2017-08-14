const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {

	const User = sequelize.define('User', {
		username: { type:  DataTypes.STRING },
		password: { type: DataTypes.STRING },
		role: {type: DataTypes.STRING }
	})

	User.prototype.validPassword = function(password) {
		return bcrypt.compareSync(password, this.password);
	}

	User.prototype.generateHash = function(password) {
		return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
	}

	// User hooks to make callbacks or before actions
	User.hook('beforeCreate', (user, options) => {
		user.password = user.generateHash(user.password);
	})

	// Used to create a seed of users
	User.sync({force: true}).then(function() {
		User.create({
			username: "brucewong21",
			password: "b22190",
			role: 'ADMIN'
		})
		console.log("CREATED 1 USER");
	})
	
	return User;
}



