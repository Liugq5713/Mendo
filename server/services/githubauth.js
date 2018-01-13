const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("user");

const keys = require("../config/keys");

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
      // 对于其对象的具体的结构要清楚
      // console.log("profile", profile);
      // console.log("------------");
      console.log("profile.username", profile.username);
      const user = await new User({
        username: profile.username,
        githubId: profile.id
      }).save();
      done(null, user);
    }
  )
);
