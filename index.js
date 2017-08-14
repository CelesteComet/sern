// Importing Node modules and initializing Express
const express = require('express'),
			app = express(),
			bodyParser = require('body-parser'),
			logger = require('morgan'),
			passport = require('passport'),
			config = require('./config/main');
			path = require('path');

// Setting up basic middleware for all Express requests
app.use(logger('dev')); // Log requests to API using morgan

// Envable CORS from client-side
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Parse request body
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

app.use(express.static('public'))

// Passport Stuff
app.use(passport.initialize());
require('./config/passport')(passport);

// Routes
require('./app/routes/auth')(app);
require('./app/routes/venue.routes')(app);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/src/index.html'));
});

const server = app.listen(config.port, () => {
	console.log('Your server is running on port ' + config.port + '.');
});
