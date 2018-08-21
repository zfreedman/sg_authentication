const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define model
const userSchema = new Schema({
  email: {
    lowercase: true,
    type: String,
    unique: true
  },
  password: String
});

// on save hook, encrypt password
// before saving, run this
userSchema.pre("save", function (next) {

  // get access to instance of user model (1 instance)
  const user = this;

  // generate a salt, then run callback
  bcrypt.genSalt(10, function (err, salt) {
    if (err)
      return next(err);

    // hash password using salt (encrypt pass)
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err)
        return next(err);

      // overwrite plain text password with encrypted variant
      user.password = hash;
      next();
    });
  });
});

// create model class
const User = mongoose.model("user", userSchema);

// export model
module.exports = User;
