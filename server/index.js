const express = require("express");
const passport = require("passport");
const GitHubStrategy = require("passport-github");
const keys = require("./config/keys");

// ---DB---
const mongoose = require("mongoose");
mongoose.connect(keys.MongoDBURI, { useMongoClient: true }, err => {
  if (err) {
    console.error(" db connection error: " + err.message);
  }
});

// ----

const app = express();

app.get("/auth/github", passport.authenticate("github"));

app.get("/auth/github/callback", passport.authenticate("github"));

passport.use(
  new GitHubStrategy(
    {
      clientID: keys.GITHUB_CLIENT_ID,
      clientSecret: keys.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      console.log(accessToken);
    }
  )
);

app.use(passport.initialize());
app.use(passport.session());

// ----
app.get("./login", (req, res) => {
  console.log(req);
});

app.listen(5000, () => {
  console.log("server start");
});
