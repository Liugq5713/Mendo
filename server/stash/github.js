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

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
