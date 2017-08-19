module.exports = function(sequelize, DataTypes) {
	
	const Resource = 'Profile';

	const mResource = sequelize.define(Resource, {
		company_name: { type: DataTypes.STRING },
		type: { type: DataTypes.STRING }
	})

	mResource.associate = function(models) {
		mResource.belongsTo(models.User);
	}

	return mResource;
}



