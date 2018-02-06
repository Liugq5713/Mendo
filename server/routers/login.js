const router = require("express").Router();
const passport = require("passport");
router.post(
  "/login",
  passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

module.exports = router;
