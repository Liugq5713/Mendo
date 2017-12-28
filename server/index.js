const express = require("express");
const expressSession = require("express-session");
const passport = require("passport");
const GitHubStrategy = require("passport-github");
const LocalStrategy = require("passport-local");
const keys = require("./config/keys");
require("./models/User");
require("./services/signup");
const signup = require("./routers/signup");

const app = express();

app.use(require("body-parser").urlencoded({ extended: true }));
// app.use(require("cookie-parser")());

app.use(
  expressSession({
    name: "mendo",
    secret: keys.sessionSecret,
    cookie: { user: "default", maxAge: 14 * 24 * 60 * 60 * 1000 }
  })
);
app.use(passport.initialize());
app.use(passport.session());

// ---DB---
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

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
