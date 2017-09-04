module.exports = function(sequelize, DataTypes) {
	
	const Resource = 'Profile';

	const mResource = sequelize.define(Resource, {
		company_name: { 
			type: DataTypes.STRING,
			validate: {
				notEmpty: true
			}
		},
		performance_type: { 
			type: DataTypes.STRING,
		},
		email: { 
			type: DataTypes.STRING,
			validate: {
				isEmail: true
			}
		},
		address: {
			type: DataTypes.STRING
		},
		phone_number: {
			type: DataTypes.STRING,
		}
	})

	mResource.associate = function(models) {
		mResource.belongsTo(models.User);
	}

	return mResource;
}



