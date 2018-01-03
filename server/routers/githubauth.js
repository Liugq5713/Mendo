const router = require("express").Router();
const passport = require("passport");
router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["profile", "email"]
  })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    //  TODO： 不是很完美，待解决
    failureRedirect: "http://localhost:8080/login",
    successRedirect: "http://localhost:8080"
  })
);

module.exports = router;
