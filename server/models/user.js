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

// create model class
const User = mongoose.model("user", userSchema);

// export model
module.exports = User;
