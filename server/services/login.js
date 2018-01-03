const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("user");

passport.use(
  "login",
  new LocalStrategy(async (username, password, done) => {
    try {
      let existingUser = await User.findOne({ username: username });
      if (!existingUser) return done(null, false);
      // if (!existingUser.authenticate(password)) return done(null, false);
      done(null, existingUser);
    } catch (err) {
      done(err);
    }
  })
);
