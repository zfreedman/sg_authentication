const ExtractJwt = require("passport-jwt").ExtractJwt;
const JwtStrategy = require("passport-jwt").Strategy;
const passport = require("passport");

const config = require("../config");
const User = require("../models/user");
