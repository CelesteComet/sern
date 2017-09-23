const Venue = require('mongoose').model('Venue');
const User = require('mongoose').model('User');

module.exports = function(app) {

  // GET /venues
  // Index
  app.get('/api/venues', (req, res, next) => {
    Venue.find({})
      .sort({'date': -1})
      .limit(8)
      .exec((err, venues) => {
        if (err) { return res.send(err) }
        res.send(venues);
      })
  });

  // GET /venues/1
  // Show
  app.get('/api/venues/:id', (req, res, next) => {

    Venue.find({ _id:req.params.id })
      .populate('_user')
      .exec((err, venue) => {
        if (err) { return res.send(err) } 
        res.send(venue);
      })
  });

  // POST /api/venues
  // Create
  app.post('/api/venues', (req, res, next) => {
    var venue = new Venue(req.body);

    venue.save((err) => {
      if (err) { return res.send(err) }  
      res.json(venue);
    });
  });


  // PUT /api/venues/:id
  // Update
  app.put('/api/venues/:id', (req, res, next) => {
    Venue.findById(req.params.id, (err, venue) => {
      if (err) { return res.send(err) };

      venue.set(req.body);

      venue.save((err, updatedVenue) => {
        if (err) { return res.send(err) };
        res.send(updatedVenue);
      });
    });
  });

  // DELETE /api/venues/:id
  // Destroy
  app.delete('/api/venues/:id', (req, res, next) => {
    Venue.findById(req.params.id, (err, venue) => {
      if (err) { return res.send(err) };

      venue.remove((err) => {
        if (err) { return res.send(err) };
        res.json(venue);
      })
    });
  });


}