const config = require('./main'),
			Sequelize = require('sequelize');

module.exports = function() {
	var sequelize = new Sequelize(config.database_URL);

	require('../app/models/user')(sequelize, Sequelize.DataTypes);
	require('../app/models/venue')(sequelize, Sequelize.DataTypes);
	require('../app/models/profile')(sequelize, Sequelize.DataTypes);

	Object.keys(sequelize.models).forEach(function(modelName) {
		if("associate" in sequelize.models[modelName]) {
			sequelize.models[modelName].associate(sequelize.models);
		}
	})

	sequelize.sync({force: false}).then(() => {
		/*
		const { User, Venue, Profile } = sequelize.models;

		User.create({
			username: "brucewong21",
			password: "b22190",
			role: 'ADMIN'
		})
		var locations = ['Taipei 101', 'Taipei Main Station', 'Taipei Zoo', 'Shilin Nightmarket', 'Jiantan', 'Dingpu Station', 'Nangkang Exhibition Center', 'Wanhua District', 'Raohe Nightmarket', 'Hsinchu'];
		var names = ['Jazz', 'Figure Skating', 'Magic Show', 'Art Exhibit', 'Food Exhibit', 'Fashion Show', 'Wine Festival', 'Science Exhibit', 'Bun Tasting', 'Mooncake Festival'];

		for(var i = 0; i < locations.length; i++) {
			Venue.create({
				name: names[i],
				location: locations[i],
				startDate: "2017-08-17T19:00:00.000Z",
				endDate: "2017-08-18T19:00:00.000Z",
			})
		}
		console.log("CREATED 10 VENUES");
		const companyNames = ['Sistar']//, 'SNSD', 'JYP'];
		const types = ['dance']//, 'singing', 'music'];

		for(var i = 0; i < companyNames.length; i++) {
			Profile.create({
				company_name: companyNames[i],
				type: types[i],
				UserId: 1 
			})
		}
	})
	*/
	})
	return sequelize;
}			


