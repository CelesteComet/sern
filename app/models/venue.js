module.exports = function(sequelize, DataTypes) {
	
	const Venue = sequelize.define('Venue', {
		name: { type:  DataTypes.STRING },
		location: { type: DataTypes.STRING },
		startDate: { type: DataTypes.DATE },
		endDate: { type: DataTypes.DATE }
	})

	Venue.sync({force: true}).then(function() {

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

		console.log("CREATED 10 LOCATIONS")
	})

	return Venue;
}



