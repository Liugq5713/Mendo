const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("user");

passport.use(
  "signup",
  new LocalStrategy(async (username, password, done) => {
    let existingUser = await User.findOne({ username: username });
    if (existingUser) {
      done(null, existingUser);
    }
    const user = await new User({
      username: username,
      password: password
    }).save();
    done(null, user);
  })
);
