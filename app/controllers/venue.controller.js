const models = require('../../models').sequelize.models;
const Venue = models.Venue;

exports.all = function(req, res) {
	Venue.findAll({
		order: [
			['id', 'DESC']
		]
	})
	.then((venues) => res.status(200).send(venues))
	.catch((error) => res.status(400).send(error));
}

exports.paginate = function(req, res) {
	Venue.findAll({
		order: [
			['id', 'DESC']
		],
		limit: 200,
		offset: req.query.page * 5
	})
	.then(venues => res.send(venues))
	.catch(err => res.send(err))
}

exports.create = function(req, res) {
	var body = req.body;
	body.UserId = req.user.id;
	Venue.create(req.body)
		.then(venue => res.send(venue))
		.catch(err => res.status(400).send(err)); // Error not being caught fix here.
}

exports.read = function(req, res) {
	Venue.findById(req.params.id, {
		include: [ models.User ]
	})
		.then(venue => res.send(venue))
		.catch(err => res.status(404).send(err));
}

exports.update = function(req, res) {
	const id = req.params.id;
	const updates = req.body;
	Venue.find({
		where: { id: id },
		include: [ models.User ]
	})
		.then(venue => {return venue.updateAttributes(updates)})
		.then(updatedVenue => res.send(updatedVenue))
		.catch(err => res.status(404).send(err));
}

exports.delete = function(req, res) {
	const id = req.params.id;
	Venue.destroy({
		where: { id: id }	
	})
	.then(() => res.send("DESTROYED")); // Not sure why there is no response?
}