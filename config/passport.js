const passport = require('passport'),
      GoogleStrategy = require('passport-google-oauth20').Strategy,
      keys = require('./keys'),
      mongoose = require('mongoose');
      

module.exports = () => {

  User = mongoose.model('User');

  passport.use(new GoogleStrategy({
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({ 'googleId': profile.id })
        .then((existingUser) => {
          if (existingUser) {
            done(null, existingUser);
          } else {
            new User({ 
              googleId: profile.id,
              fullName: profile.displayName,
              email: profile.emails[0].value
            })
              .save()
              .then(user => done(null, user))
          }
        })
    }
  ));      

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
  });
}      


