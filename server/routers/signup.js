const router = require("express").Router();
const passport = require("passport");

router.post(
  "/signup",
  passport.authenticate("signup", {
    successRedirect: "/"
  })
);

module.exports = router;
