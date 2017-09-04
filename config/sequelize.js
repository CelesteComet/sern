const config = require('./main'),
			Sequelize = require('sequelize');

var sequelize = new Sequelize(config.database_URL);

require('../app/models/user')(sequelize, Sequelize.DataTypes);
require('../app/models/venue')(sequelize, Sequelize.DataTypes);
require('../app/models/profile')(sequelize, Sequelize.DataTypes);

Object.keys(sequelize.models).forEach(function(modelName) {
	if("associate" in sequelize.models[modelName]) {
		sequelize.models[modelName].associate(sequelize.models);
	}
})

module.exports = sequelize;

