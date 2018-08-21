const ExtractJwt = require("passport-jwt").ExtractJwt;
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local");
const passport = require("passport");

const config = require("../config");
const User = require("../models/user");

// setup options for jwt strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
};

// create jwt strategy (called whenever a user has to be authenticated
// with a jwt token)
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {

  // see is the user id in the payload exists in database
  // if so, call "done" with that user
  // otherwise, call done without user object
  User.findById(payload.sub, function (err, user) {
    if (err)
      return done(err, false);

    if (user)
      done(null, user);
    else
      done(null, false);
  });
});


// create local strategy
const localOptions = { usernameField: "email" };
const localLogin = (
  new LocalStrategy(localOptions, function (email, password, done) {

    // verify email and password
    // call done with user if email/pass is correct
    // otherwise, call done with false
    User.findOne({ email: email }, function (err, user) {
      if (err)
        return done(err);

      if (!user)
        return done(null, false);

      // compare passwords
      user.comparePassword(password, function (err, isMatch) {

        if (err)
          return done(err);

        if (!isMatch)
          return done(null, false);

        return done(null, user);
      });
    });
  })
);

// tell passport to use strategies
passport.use(jwtLogin);
passport.use(localLogin);
