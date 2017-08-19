module.exports = function(sequelize, DataTypes) {
	
	const Venue = sequelize.define('Venue', {
		name: { type:  DataTypes.STRING },
		location: { type: DataTypes.STRING },
		startDate: { type: DataTypes.DATE },
		endDate: { type: DataTypes.DATE }
	})

	return Venue;
}



