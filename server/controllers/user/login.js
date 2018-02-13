const passport = require("passport");
module.exports = passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/login"
})