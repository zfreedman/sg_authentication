const jwt = require("jwt-simple");
const User = require("../models/user");

const config = require("../config");

function tokenForUser (user) {
  const timestamp = new Date().getTime();

  return jwt.encode({
    iat: timestamp,
    sub: user.id
  }, config.secret);
}

exports.signin = function (req, res, next) {

  // user has already had email/password auth'd
  // ...just need to administer token
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = function (req, res, next) {
  // see if user with given email exists
  const email = req.body.email;
  const password = req.body.password;

  if (email === undefined || password === undefined)
    return res.status(422).send({
      error: "Email and password are both required."
    });

  User.findOne({ email: email }, function (err, existingUser) {
    if (err)
      return next(err);

      // if user with email exists, return error
    if (existingUser)
      return res.status(422).send({
        error: "Email in use"
      });

      // if user with email does not exist, create and save record
      const user = new User({
        email: email,
        password: password
      });
      user.save(function (err) {
        if (err)
          return next(err);

        // respond to request indicating the user was created
        res.json({ token: tokenForUser(user) });
      });
  });
};
