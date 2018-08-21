const User = require("../models/user");

exports.signup = function (req, res, next) {
  // see if user with given email exists
  const email = req.body.email;
  const password = req.body.password;

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
      })
        .save(function (err) {
          if (err)
            return next(err);

          // respond to request indicating the user was created
          res.json({ success: true });
        });


  });
}
