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
