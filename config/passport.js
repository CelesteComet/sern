// Importing Passport, strategies, and config
const passport = require('passport'),
			models = require('../app/models'),
			config = require('./main'),
			JwtStrategy = require('passport-jwt').Strategy,
			ExtractJwt = require('passport-jwt').ExtractJwt,
			LocalStrategy = require('passport-local');

const jwtOptions = {  
  // Telling Passport to check authorization headers for JWT
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  // Telling Passport where to find the secret
  secretOrKey: config.secret
};

// Setting up local login strategy
module.exports = function(passport) {

  passport.use('local', new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password'
    },
    function(username, password, done){
      models.User.findOne({ where: {username: username} }).then(function(user){
        if (!user) {
          return done(null, false, {message: 'Invalid Username or Password'});
        }
        if (!user.validPassword(password)) {
          return done(null, false, {message: 'Invalid Username or Password'});
        }
        return done(null, user);
      });
    }
  ));

  passport.use('jwt', new JwtStrategy(jwtOptions, function(payload, done) {
      models.User.findOne({ where: {id: payload.id} }).then(function(user){
      	if(user) {
      		done(null, user);
      	} else {
      		done(null, false, {message: 'Invalid Username or Password'});
      	}
      });
  }));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(user, done) {
    models.user.findById(user.id, function(err, user) {
      done(err, user);
    });
  });
}

