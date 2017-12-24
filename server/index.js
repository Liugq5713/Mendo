const express = require("express");
const expressSession = require("express-session");
const passport = require("passport");
const GitHubStrategy = require("passport-github");
const LocalStrategy = require("passport-local");
const keys = require("./config/keys");

require("./services/signup");
const signup = require("./routers/signup");

const app = express();

app.use(require("body-parser").urlencoded({ extended: true }));
app.use(require("cookie-parser")());

app.use(expressSession({ secret: keys.sessionSecret }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
// ---DB---
const mongoose = require("mongoose");
mongoose.connect(keys.MongoDBURI, { useMongoClient: true }, err => {
  if (err) {
    console.error(" db connection error: " + err.message);
  }
});

// ----
app.use("/api", signup);

// ----

app.listen(5000, () => {
  console.log("server start");
});
