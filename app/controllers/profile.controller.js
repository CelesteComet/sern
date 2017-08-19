const { db } = require('../../index');
const models = db.models;
const resource = 'Profile';

exports.all = function(req, res) {
	models[resource].findAll({
		order: [
			['id', 'ASC']
		]
	})
	.then((resources) => res.status(200).send(resources))
	.catch((error) => res.status(400).send(error));
}

exports.create = function(req, res) {
	models[resource].create(req.body)
		.then(resource => res.send(resource))
		.catch(err => res.status(400).send(err)); // Error not being caught fix here.
}

exports.read = function(req, res) {
	models[resource].findById(req.params.id)
		.then(resource => res.send(resource))
		.catch(err => res.status(404).send(err));
}

exports.update = function(req, res) {
	const id = req.params.id;
	const updates = req.body;
	models[resource].find({
		where: { id: id }
	})
		.then(resource => {return resource.updateAttributes(updates)})
		.then(updatedVenue => res.send(updatedVenue))
		.catch(err => res.status(404).send(err));
}

exports.delete = function(req, res) {
	const id = req.params.id;
	models[resource].destroy({
		where: { id: id }	
	})
	.then(() => res.send("DESTROYED")); // Not sure why there is no response?
}

exports.sandbox = function(req, res) {
	const id = req.user.id;
	models[resource].findOne({
		where: {
			UserId: id
		},
		include: [ models.User ]
	})
	.then(stuff => res.send(stuff))
	.catch(err => res.send(err))
}
