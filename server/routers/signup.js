const router = require("express").Router();
const passport = require("passport");

router.post(
  "/signup",
  passport.authenticate("signup", {
    successRedirect: "/",
    session: true
  })
);

router.get("/checkuser", (req, res) => {
  res.send("get it");
});

module.exports = router;
