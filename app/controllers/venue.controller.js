const models = require('../models');

exports.all = function(req, res) {
	models.Venue.findAll({
		order: [
			['id', 'ASC']
		]
	})
	.then((venues) => res.status(200).send(venues))
	.catch((error) => res.status(400).send(error));
}

exports.create = function(req, res) {
	models.Venue.create(req.body)
		.then(venue => res.send(venue))
		.catch(err => res.status(400).send(err)); // Error not being caught fix here.
}

exports.read = function(req, res) {
	models.Venue.findById(req.params.id)
		.then(venue => res.send(venue))
		.catch(err => res.status(404).send(err));
}

exports.update = function(req, res) {
	const id = req.params.id;
	const updates = req.body;
	models.Venue.find({
		where: { id: id }
	})
		.then(venue => {return venue.updateAttributes(updates)})
		.then(updatedVenue => res.send(updatedVenue))
		.catch(err => res.status(404).send(err));
}

exports.delete = function(req, res) {
	const id = req.params.id;
	models.Venue.destroy({
		where: { id: id }	
	})
	.then(() => res.send("DESTROYED")); // Not sure why there is no response?
}