const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("user");

const keys = require("../config/keys");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
passport.use(
  new GitHubStrategy(
    {
      clientID: keys.GITHUB_CLIENT_ID,
      clientSecret: keys.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/github/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ githubId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        username: profile.username,
        password: "none",
        githubId: profile.id
      })
        .save()
        .catch(err => {
          done(err);
        });
      done(null, user);
    }
  )
);
