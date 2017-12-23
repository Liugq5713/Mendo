const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  "signup",
  new LocalStrategy((username, password, done) => {
    console.log("hi");
    console.log(username);
    return done(null);
  })
);
