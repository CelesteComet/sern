const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {

	const User = sequelize.define('User', {
		username: { type:  DataTypes.STRING, unique: true},
		password: { type: DataTypes.STRING, unique: true },
		role: {type: DataTypes.STRING }
	})

	User.associate = function(models) {
		User.hasOne(models.Profile);
		User.hasMany(models.Venue);
	}


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
	
	return User;
}



