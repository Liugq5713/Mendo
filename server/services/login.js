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
      existingUser.comparePassword(password, (err, isMatch) => {
        if (err) done(err);
        if (isMatch) {
          done(null, existingUser);
        } else {
          done(null, false);
        }
      });
    } catch (err) {
      done(err);
    }
  })
);
