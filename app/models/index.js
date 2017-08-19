exports.init = () => {
	const fs = require('fs'),
	      path = require('path'),
	      pg = require('pg'),
	      config = require('../../config/main'),
	      seed = require('./seed');
	      Sequelize = require('sequelize'),
	      sequelize = new Sequelize(config.database_URL);

	pg.defaults.ssl = config.pg_ssl_default;

	var db = {};

	fs
	  .readdirSync(__dirname)
	  .filter(function(file) {
	    return (file.indexOf(".") !== 0) && (file !== "index.js") && (file !== "seed.js");
	  })
	  .forEach(function(file) {
	    var model = sequelize.import(path.join(__dirname, file));
	  });

	Object.keys(sequelize.models).forEach(function(modelName) {
		if("associate" in sequelize.models[modelName]) {
			sequelize.models[modelName].associate(sequelize.models);
		}
	})

	sequelize.sync({force: true}).then(() => {
		seed(sequelize);
	})
	return sequelize;
}

