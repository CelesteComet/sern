const express = require('express');
const keys = require('./keys');

// Middleware Definitions

const morgan = require('morgan'),
      bodyParser = require('body-parser'),
      compress = require('compression'),
      cookieSession = require('cookie-session'),
      passport = require('passport'),
      path = require('path');

module.exports = () => {
  const app = express();

  // Mount Application Middleware
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else {
    app.use(compress());
  }

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
  );

  // Setting the View Engine

  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  // Passport Initialization
  app.use(passport.initialize());
  app.use(passport.session());

  // Route Handlers
  require('../app/routes/auth')(app);
  require('../app/routes/venue.routes')(app);
  require('../app/routes/seed.routes')(app);

  // Serve Static Files
  app.use(express.static('./public'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', '/client/src/index.html'));
  });
  



  return app;
}




