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
    failureRedirect: "http://10.224.5.55:8080/login",
    successRedirect: "http://10.224.5.55:8080"
  })
);

module.exports = router;
