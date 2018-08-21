const ExtractJwt = require("passport-jwt").ExtractJwt;
const JwtStrategy = require("passport-jwt").Strategy;
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

// tell passport to use this strategy
passport.use(jwtLogin);
